import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'


CMS.registerPreviewStyle('../styles/main.scss')

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)


