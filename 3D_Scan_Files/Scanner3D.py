

import RPi.GPIO as GPIO

from RpiMotorLib import RpiMotorLib
from picamera import PiCamera
from time import sleep

GPIO.setmode(GPIO.BCM)

camera = PiCamera()
camera.resolution = (2592, 1944)

DisplayMotorPins = [6,13,19,26]

TiltMotorLPins = [18,23,24,25]
TiltMotorRPins = [4,17,27,22]

i = int(0)

photoNumber = int(1);

GPIO.setup(12, GPIO.IN)

DisplayMotor = RpiMotorLib.BYJMotor("MotorOne", "28BYJ")

TiltMotorL = RpiMotorLib.BYJMotor("MotorTwo", "28BYJ")
TiltMotorR = RpiMotorLib.BYJMotor("MotorThree", "28BYJ")


def takePhoto(photoNum):
    #print photo
    sleep(.5)
    camera.capture('/home/pi/shared/%i.jpg' %photoNum)


def DisMotor(steps):
    DisplayMotor.motor_run(DisplayMotorPins, .01, steps, False, False , "half", .05)

def TiltForward():
    TiltMotorL.motor_run(TiltMotorLPins, .01, 1, False, False, "half", .05)
    TiltMotorR.motor_run(TiltMotorRPins, .01, 1, False, False, "half", .05)

def TiltBackward():
    TiltMotorL.motor_run(TiltMotorLPins, .01, 1, True, False, "half", .05)
    TiltMotorR.motor_run(TiltMotorRPins, .01, 1, True, False, "half", .05)

while (i < 1):
	if GPIO.input(12):
		i = 2

camera.start_preview()

for photo in range(17):
    takePhoto(photoNumber);
    photoNumber += 1
    DisMotor(30)
    #rotate centreM 30 steps CW
    #delay

#tilt foward
for step in range(25):
    TiltForward()

for photo in range(17):
    takePhoto(photoNumber);
    photoNumber += 1
    DisMotor(30)
    #rotate centreM 30 steps CW
    #delay

#tilt backward
for step in range (50):
    TiltBackward()


for photo in range(16):
    takePhoto(photoNumber);
    photoNumber += 1
    DisMotor(32)


#tilt foward
for step in range(25):
    TiltForward()




camera.stop_preview()
i = 0

GPIO.cleanup()
