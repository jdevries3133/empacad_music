from django.db import models


class Fundraiser(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Goal(models.Model):
    name = models.CharField(max_length=100)
    target = models.IntegerField()
    current = models.IntegerField()

    fundraiser = models.ForeignKey(
        Fundraiser,
        on_delete=models.CASCADE,
        related_name='goals'
    )

    def __str__(self):
        return self.name
