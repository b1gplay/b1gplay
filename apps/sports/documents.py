from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl.registries import registry

from apps.sports.models.basketball_ratings import BasketballRatings


@registry.register_document
class BasketballRatingsDocument(Document):
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
            "proPotential"

        ]

        # Ignore auto updating of Elasticsearch when a model is saved
        # or deleted:
        # ignore_signals = True

        # Don't perform an index refresh after every update (overrides global setting):
        # auto_refresh = False

        # Paginate the django queryset used to populate the index with the specified size
        # (by default it uses the database driver's default setting)
        # queryset_pagination = 5000ss
