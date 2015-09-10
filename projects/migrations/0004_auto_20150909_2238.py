# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_projects_supervisor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='supervisor',
            field=models.CharField(default='', max_length=40),
            preserve_default=True,
        ),
    ]
