from django.db import models


class Fundraiser(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Goal(models.Model):
    name = models.CharField(max_length=50)
    target = models.IntegerField()
    current = models.IntegerField()

    fundraiser = models.ForeignKey(
        Fundraiser,
        on_delete=models.CASCADE,
        related_name='goals'
    )

    def __str__(self):
        return self.name


class Lead(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(null=True, max_length=50)
    phone = models.CharField(null=True, max_length=20)

    def __str__(self):
        return self.name


class InstrumentDonation(models.Model):
    lead = models.OneToOneField(
        Lead,
        on_delete=models.CASCADE, related_name='instrument'
    )
    name = models.TextField()  # of the instrument

    def __str__(self):
        return self.name
