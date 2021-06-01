from django.urls import path

from .views import instrument_drive

urlpatterns = [
    path('instrument_drive/', instrument_drive, name='instrument_drive')
]
