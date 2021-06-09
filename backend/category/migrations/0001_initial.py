# Generated by Django 3.0.5 on 2020-04-30 15:43

import core.custom.model_fields
from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('creation_date', models.DateTimeField(default=django.utils.timezone.now, editable=False, verbose_name='Creation date')),
                ('update_date', models.DateTimeField(auto_now=True, verbose_name='Update date')),
                ('is_active', models.BooleanField(default=True, verbose_name='Is active ?')),
                ('label', core.custom.model_fields.TitleCharField(max_length=50, unique=True, verbose_name='Label')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
    ]
