from django.db import models


class Projects(models.Model):

    title = models.CharField(max_length=40, blank=False)
    supervisor = models.CharField(max_length=40, blank=False, default='')

    def __str__(self):
        return self.title
