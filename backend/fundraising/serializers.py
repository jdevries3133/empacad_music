from rest_framework import serializers

from .models import Goal, InstrumentDonation, Lead


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('name', 'target', 'current', 'fundraiser')


class InstrumentDonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstrumentDonation
        fields = ('name',)


class LeadSerializer(serializers.ModelSerializer):
    instrument = InstrumentDonationSerializer()
    class Meta:
        model = Lead
        fields = ('name', 'email', 'phone', 'instrument')

    def create(self, validated_data):
        instrument = validated_data.pop('instrument')
        instance = Lead.objects.create(**validated_data)            # type: ignore
        instrument_donation = InstrumentDonation.objects.create(    # type: ignore
            lead=instance,
            **instrument
        )
        return instance
