# Generated by Django 3.0.5 on 2020-05-01 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0010_auto_20200501_1803'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='raters',
            field=models.BigIntegerField(default=0, verbose_name='Raters'),
        ),
    ]
