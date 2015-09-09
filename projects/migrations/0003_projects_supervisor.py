# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20150908_1445'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='supervisor',
            field=models.CharField(blank=True, default='', max_length=40),
            preserve_default=True,
        ),
    ]
