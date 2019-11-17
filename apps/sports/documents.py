from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry

from apps.sports.models.basketball_ratings import BasketballRatings
from apps.users.models.profile import Profile


@registry.register_document
class BasketballRatingsDocument(Document):
    ratedBy = fields.NestedField(properties={
        'pk': fields.TextField(),
        'account_type': fields.TextField(),

    })
    player = fields.NestedField(properties={
        'pk': fields.TextField(),
    })

    class Index:
        # Name of the Elasticsearch index
        name = 'metrics'
        # See Elasticsearch Indices API reference for available settings
        settings = {'number_of_shards': 1,
                    'number_of_replicas': 1}

    class Django:
        model = BasketballRatings  # The model associated with this Document

        # The fields of the model you want to be indexed in Elasticsearch
        fields = [
            "rebounding",
            "defence",
            "scoring",
            "leadership",
            "discipline",
            "basketballIQ",
            "energy",
            "determination",
            "clutch",
            "proPotential",



        ]

        # Ignore auto updating of Elasticsearch when a model is saved
        # or deleted:
        # ignore_signals = True

        # Don't perform an index refresh after every update (overrides global setting):
        # auto_refresh = False

        # Paginate the django queryset used to populate the index with the specified size
        # (by default it uses the database driver's default setting)
        # queryset_pagination = 5000ss

        def get_instances_from_related(self, related_instance):
            """If related_models is set, define how to retrieve the Car instance(s) from the related model.
            The related_models option should be used with caution because it can lead in the index
            to the updating of a lot of items.
            """
            if isinstance(related_instance, Profile):
                return related_instance.basketballRatings_set.all()
            elif isinstance(related_instance, Profile):
                return related_instance.basketballRatings
