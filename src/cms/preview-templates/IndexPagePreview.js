import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "success", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryDetails = entry.getIn(["data", "courses", "details"]);
  const details = entryDetails ? entryDetails.toJS() : [];

  const entryInstructors = entry.getIn(["data", "curriculum", "instructors"]);
  const instructors = entryInstructors ? entryInstructors.toJS() : [];

  const entryFormerstudents = entry.getIn(["data", "formerstudents"]);
  const formerstudents = entryFormerstudents ? entryFormerstudents.toJS() : [];

  return (
    <IndexPageTemplate
      title={entry.getIn(["data", "title"])}
      header={{
        heading: entry.getIn(["data", "header", "heading"]),
        subheading: entry.getIn(["data", "header", "subheading"]),
        headerimage: {
          image: getAsset(
            entry.getIn(["data", "header", "headerimage", "image"])
          ),
          alt: entry.getIn(["data", "header", "headerimage", "alt"]),
        },
      }}
      success={{
        heading: entry.getIn(["data", "success", "heading"]),
        blurbs,
      }}
      courses={{
        heading: entry.getIn(["data", "courses", "heading"]),
        image: {
          image: getAsset(entry.getIn(["data", "courses", "image", "image"])),
          alt: entry.getIn(["data", "courses", "image", "alt"]),
        },
        details,
      }}
      curriculum={{
        smalltext: entry.getIn(["data", "curriculum", "smalltext"]),
        heading: entry.getIn(["data", "curriculum", "heading"]),
        subheading: entry.getIn(["data", "curriculum", "subheading"]),
        image: {
          image: getAsset(
            entry.getIn(["data", "curriculum", "image", "image"])
          ),
          alt: entry.getIn(["data", "curriculum", "image", "alt"]),
        },
        instructors,
      }}
      formerstudents={formerstudents}
    />
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
