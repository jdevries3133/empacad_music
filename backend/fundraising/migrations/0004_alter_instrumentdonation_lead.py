# Generated by Django 3.2.3 on 2021-06-01 20:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fundraising', '0003_rename_instrument_instrumentdonation_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instrumentdonation',
            name='lead',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='instrument', to='fundraising.lead'),
        ),
    ]