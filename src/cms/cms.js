import CMS from "netlify-cms-app";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import FaqPagePreview from "./preview-templates/FaqPagePreview";
import BasicsPagePreview from "./preview-templates/BasicsPagePreview";
import BootcampPagePreview from "./preview-templates/BootcampPagePreview";
import CareersPagePreview from "./preview-templates/CareersPagePreview";
import PrivacyPolicyPagePreview from "./preview-templates/PrivacyPolicyPagePreview";

CMS.registerPreviewStyle("../styles/main.scss");

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("faq", FaqPagePreview);
CMS.registerPreviewTemplate("basics", BasicsPagePreview);
CMS.registerPreviewTemplate("bootcamp", BootcampPagePreview);
CMS.registerPreviewTemplate("careers", CareersPagePreview);
CMS.registerPreviewTemplate("privacy-policy", PrivacyPolicyPagePreview);
