import CMS from 'netlify-cms-app'
import '../styles/main.scss';

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewStyle('../styles/main.scss')

CMS.registerPreviewTemplate('index', IndexPagePreview)

