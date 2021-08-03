#!/usr/bin/env python
# coding: utf-8

# In[1]:


# IMPORTING_LIBRARIES
import cv2
import matplotlib.pyplot as plt
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model


# IMPORTING KERAS SEQUENTIAL MODEL
model = load_model('C:/Users/lenovo/Desktop/New Folder')
    

# IMPORTING HAARCASCADE FACE DETECTOR
face_haar_cascade = cv2.CascadeClassifier('C:/Users/lenovo/Downloads/haarcascade_frontalface_default.xml')
    


# In[2]:


# LAUNCHING EMOTION ANALYSER
def ANALYSE_EMOTION():

   # specifying parameters
   cam = 0
   face_border_color = (0,255,0)
   face_border_thickness = 6
   final_image_size = (48,48)
   emotions = ('angry', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise')
   displayed_emotion_font = cv2.FONT_HERSHEY_SIMPLEX
   displayed_emotion_color = (100,30,20)
   closing_window_key = 'q'
   rescaling_factor = 255

   # accesing camera
   cap = cv2.VideoCapture(cam)

   # live video feed
   while True:
       ret, test_image = cap.read()

       faces_detected = face_haar_cascade.detectMultiScale(test_image, 1.7, 3)

       for (x,y,h,w) in faces_detected:
           cv2.rectangle(test_image, (x,y), (x+w,y+h), face_border_color, thickness=face_border_thickness)
           target_image = test_image[y:y+w, x:x+h]
           target_image = cv2.resize(target_image, final_image_size)
           image_pixels = image.img_to_array(target_image)
           image_pixels = np.expand_dims(image_pixels, axis=0)
           image_pixels = image_pixels/rescaling_factor
           prediction = model.predict(image_pixels)
           max_index = np.argmax(prediction)
           global predicted_emotion
           predicted_emotion = emotions[max_index]
           #print(predicted_emotion)
           cv2.putText(test_image, predicted_emotion, (int(x), int(y)), displayed_emotion_font, 2, displayed_emotion_color, 3 )

       cv2.imshow('test_image', test_image)
    
       if cv2.waitKey(10) == ord(closing_window_key):
           break
       
   cap.release()
   cv2.destroyAllWindows()
   return predicted_emotion

# In[3]:


#ANALYSE_EMOTION()


# In[ ]:




