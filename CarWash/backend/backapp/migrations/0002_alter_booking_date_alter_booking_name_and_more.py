# Generated by Django 4.2.3 on 2023-11-19 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='date',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='booking',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='booking',
            name='phone',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='booking',
            name='time',
            field=models.CharField(default=3, max_length=30),
            preserve_default=False,
        ),
    ]
