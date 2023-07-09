from django.db import models

class TimeEntry(models.Model):
    hour = models.IntegerField()
    minute = models.IntegerField()
    am_pm = models.CharField(max_length=2)
