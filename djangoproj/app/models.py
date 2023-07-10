from django.db import models

class TimeEntry(models.Model):
    hour = models.CharField(max_length=2)
    minute = models.CharField(max_length=2)
    ampm = models.CharField(max_length=2)