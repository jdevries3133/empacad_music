from django.urls import path

from .views import instrument_drive, lead_form

urlpatterns = [
    path('instrument_drive/', instrument_drive, name='instrument_drive'),
    path('lead/', lead_form, name='lead_form')
]
