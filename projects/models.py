from django.db import models


class Projects(models.Model):

    name = models.CharField(max_length=40, blank=False)
    supervisor = models.CharField(max_length=40, blank=False, default='')

    def __str__(self):
        self.name
