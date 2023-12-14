from django.urls import path, include
from .views import *

urlpatterns = [
    path('', index),
    path('psychology/', index_specialist),
]