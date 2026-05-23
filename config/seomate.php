<?php

use craft\elements\Entry;
use craft\helpers\App;

return [
    '*' => [
        // ------ General ------
        'cacheEnabled' => App::env('CRAFT_ENVIRONMENT') === 'production',
        'cacheDuration' => 3600,

        // ------ Site identity ------
        'siteName' => App::env('SITE_NAME') ?: 'Ganz Lebendig',
        'includeSitenameInTitle' => true,
        'sitenamePosition' => 'after',
        'sitenameSeparator' => '|',

        // ------ Source mapping ------
        // SEOmate's `fieldHandle:subFieldHandle` syntax only works for Matrix sub-fields.
        // For ContentBlock sub-fields (hero), we use object-template syntax: `{hero.text}`.
        'fieldProfiles' => [
            'default' => [
                'title' => ['{hero.headline}', 'title'],
                'description' => ['{hero.text|striptags|trim}'],
                'image' => ['{hero.image.one().id ?? ""}'],
            ],
        ],

        // All sections currently use the pagebuilder entry type → one shared profile.
        'profileMap' => [
            'pages' => 'default',
            'home' => 'default',
            'contact' => 'default',
            'errorPages' => 'default',
        ],

        // ------ Defaults / fallbacks (when fieldProfiles return empty) ------
        'defaultMeta' => [
            'title' => ['{hero.headline}'],
            'description' => [
                '{hero.text|striptags|trim}',
            ],
            'image' => [
                '{hero.image.one().id ?? ""}',
            ],
        ],

        // ------ Static tags applied to every page ------
        'additionalMeta' => [
            'twitter:card' => 'summary_large_image',
            'og:type' => 'website',
            // Keep non-production environments (e.g. dev, staging) out of search
            // indexes. Production stays fully indexable.
            'robots' => App::env('CRAFT_ENVIRONMENT') === 'production' ? 'all' : 'noindex, nofollow',
        ],

        // ------ Length constraints / validation ------
        'metaPropertyTypes' => [
            'title,og:title,twitter:title' => [
                'type' => 'text',
                'minLength' => 10,
                'maxLength' => 60,
            ],
            'description,og:description,twitter:description' => [
                'type' => 'text',
                'minLength' => 50,
                'maxLength' => 160,
            ],
            'image,og:image,twitter:image' => [
                'type' => 'image',
            ],
        ],

        // ------ Image transforms for og:image / twitter:image ------
        'imageTransformMap' => [
            'og:image' => [
                'width' => 1200,
                'height' => 630,
                'format' => 'jpg',
                'mode' => 'crop',
            ],
            'twitter:image' => [
                'width' => 1200,
                'height' => 600,
                'format' => 'jpg',
                'mode' => 'crop',
            ],
        ],

        'useImagerIfInstalled' => false,

        // ------ Sitemap ------
        'sitemapEnabled' => true,
        'sitemapName' => 'sitemap',
        'sitemapLimit' => 500,
        'sitemapConfig' => [
            'elements' => [
                [
                    'elementType' => Entry::class,
                    'criteria' => ['section' => ['home', 'pages', 'contact']],
                    'params' => [
                        'changefreq' => 'weekly',
                        'priority' => 0.8,
                    ],
                ],
            ],
            'custom' => [],
        ],

        // ------ Preview ------
        'previewEnabled' => true,
    ],
];
