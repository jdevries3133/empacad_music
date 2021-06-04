from django.contrib import admin

from .models import Goal, Fundraiser, Lead, InstrumentDonation

for m in (Goal, Fundraiser, Lead, InstrumentDonation):
    admin.site.register(m)
