# Generated by Django 3.0.5 on 2020-05-01 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0011_book_raters'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='avg_ratings',
            field=models.SmallIntegerField(default=0, verbose_name='Rating'),
        ),
    ]
