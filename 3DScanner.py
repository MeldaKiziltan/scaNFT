

import RPi.GPIO as GPIO

from RpiMotorLib import RpiMotorLib
from picamera import PiCamera
from time import sleep

camera = PiCamera()

DisplayMotorPins = [6,13,19,26]

TiltMotorLPins = [18,23,24,25]
TiltMotorRPins = [4,17,27,22]

photoNumber = int(1);

DisplayMotor = RpiMotorLib.BYJMotor("MotorOne", "28BYJ")

TiltMotorL = RpiMotorLib.BYJMotor("MotorTwo", "28BYJ")
TiltMotorR = RpiMotorLib.BYJMotor("MotorThree", "28BYJ")


def takePhoto(photoNum):
    #print photo
    sleep(.5)
    camera.capture('/home/pi/shared/%i.jpg' %photoNum)

#def sendPhoto():
    #send photo to file in PC
def DisMotor(steps):
    DisplayMotor.motor_run(DisplayMotorPins, .01, steps, False, False , "half", .05)

def TiltForward():
    TiltMotorL.motor_run(TiltMotorLPins, .01, 1, False, False, "half", .05)
    TiltMotorR.motor_run(TiltMotorRPins, .01, 1, False, False, "half", .05)

def TiltBackward():
    TiltMotorL.motor_run(TiltMotorLPins, .01, 1, True, False, "half", .05)
    TiltMotorR.motor_run(TiltMotorRPins, .01, 1, True, False, "half", .05)



camera.start_preview()

for photo in range(17):
    takePhoto(photoNumber);
    photoNumber += 1
    DisMotor(30)
    #rotate centreM 30 steps CW
    #delay

#tilt foward
for step in range(43):
    TiltForward()

for photo in range(17):
    takePhoto(photoNumber);
    photoNumber += 1
    DisMotor(30)
    #rotate centreM 30 steps CW
    #delay

#tilt backward
for step in range (86):
    TiltBackward()


for photo in range(16):
    takePhoto(photoNumber);
    photoNumber += 1
    DisMotor(32)


#tilt foward
for step in range(43):
    TiltForward()




camera.stop_preview()
GPIO.cleanup()
