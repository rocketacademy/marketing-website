import CMS from 'netlify-cms-app'
import '../styles/main.scss';

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'


CMS.registerPreviewStyle('../styles/main.scss')

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)

