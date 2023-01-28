import aws from "aws-sdk";

export const s3 = (AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION) => {
  new aws.S3({
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_KEY,
    region: AWS_REGION,
  });
};

export const getSignedUrl = ({ key }) => {
  return new Promise((resolve, reject) => {
    s3.createPresignedPost(
      {
        Bucket: "sparcs-2023-startup-hackathon-l-1",
        Fields: {
          key /* ex) image/<파일 이름>.<jpeg or png> */,
        },
        Conditions: [
          ["content-length-range", 0, 50 * 1000 * 1000],
          ["starts-with", "$Content-Type", "image/"],
        ],
      },
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
};
