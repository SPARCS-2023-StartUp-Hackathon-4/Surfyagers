import aws from "aws-sdk";
const bucket = "sparcs-2023-startup-hackathon-l-1";
let S3 = {};

export const s3 = (AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION) => {
  S3 = new aws.S3({
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_KEY,
    region: AWS_REGION,
  });
};

export const getSignedUrl = (imgUrl) => {
  return S3.getSignedUrl("getObject", {
    Bucket: bucket,
    Key: imgUrl,
    Expires: 60,
  });
};
