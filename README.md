# Body Area Network - AWS-IoT - Group 19

## Create an IAM Policy
1. In the AWS Management Console, click **Services**, and then click **IAM** to open the IAM dashboard.
2. In the left navigation menu, click **Policies**. Click **Create policy**.
3. Click the `JSON` tab.
4. In the editor text box, replace the sample policy with the policy present in folder:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "greengrass:*",
        "iot:*",
        "iotanalytics:*",
        "cloud9:*",
        "lambda:*",
        "s3:*",
        "sns:*",
        "iam:*",
        "cognito-identity:*",
        "cognito-sync:*",
        "cognito-idp:*",
        "logs:*",
        "ec2:*",
        "cloudwatch:*",
        "kms:ListAliases",
        "kms:DescribeKey",
        "cloudformation:DescribeStackResources",
        "tag:getResources"
      ],
      "Resource": "*"
    }
  ]
}
```
5. Click **Review Policy**.
6. For Name, enter `SCGroup19Policy`.
7. Click **Create policy**.

## Create an IAM user and attach a policy to the user.
1. In the AWS Management Console, click **Services**, and then click **IAM** to go to the IAM dashboard.
2. In the left navigation menu, click Users. Click **Add user**. User name text box, enter `SCGroup19`.
3. For Access type, select AWS Console access.
4. Click Next: Permissions.
5. In the Set permissions section, click Attach existing policies directly.
6. In the search text box for Filter, enter `SCGroup19Policy`.
7. Put a check mark next to `SCGroup19Policy` in the filtered list.
8. Click Next: Tags. Click Next: Review.
9. Review the information, and click **Create user**. You should see a success message.
10. Sign in as the `SCGroup19` IAM user.

## Create an AWS Cloud9 environment
1. In the AWS Management Console, click **Services**, and then click **Cloud9** to open the Cloud9 dashboard.
2. Make sure you are in the **Ireland** region.
3. Click Create environment at the top-right corner.
4. For Name, enter `IoTOnAws-1`.
5. Click Next step.
6. On the Configure Settings page, leave the default settings, and click Next step.
7. Review the details, and click Create environment. This should launch your AWS Cloud9 environment within a few minutes.

## Setup your Cloud9 Environment, download the Car code and the AWS IoT CA Public Cert
1. Install the AWS IoT Device SDK Node package by running the following command in your AWS Cloud9 terminal. You can find that terminal at the bottom of the page. There is a bash tab with the prompt SCGroup19:~/environment: $.
`npm install aws-iot-device-sdk`
You can ignore the warnings that there are no package.json files.
2. Create the repository structure for the BAN application. As there will be sensors, sink and server. Need create folder for each. Run the following commands in your AWS Cloud9 terminal.
`mkdir ~/environment/’sensor_name’`

3. Download the AWS IoT Certificate Authority Public Certificate that will be used in the code later and that will sign the IoT Certificates you will create in the next section. To do so, execute the following commands in your Cloud9 terminal:
4. `cd ~/environment`  
5. `wget -O root-CA.crt https://www.amazontrust.com/repository/AmazonRootCA1.pem`

## Create an IoT Policy
1. Click **Secure** in the left menu.
2. Click **Policies**.
3. Click **Create a policy**.
4. For Name, enter `SCGroup19Policy`.
5. Click Advanced mode.
6. Replace the sample policy with the policy present in folder:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Connect",
        "iot:Publish",
        "iot:Subscribe",
        "iot:Receive",
        "greengrass:Discover"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}
```
7.	Click **Create**.

## Creation of IoT Core resources using the CLI
1. In your Cloud9 terminal, enter the following commands to create the another IoT Thing:
   * `cd ~/environment/’sensor_name’`
   * `aws iot create-thing --thing-name ‘sensor_name’`
2. To create the Certificate, enter the following command:
   * `aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile certificate.pem.crt --private-key-outfile private.pem.key`
3. To attach the Policy to the Certificate, enter the following command. Replace `certificateArn_changeme` with the value of the attribute certificateArn from the output of the previous command. It should be similar to: `arn:aws:iot:us-east-1:1234567890:cert/0f11db22dafacda87be0940dd5b2e010635916f541461ccf2d1c56ced0f343ee`
   * `aws iot attach-policy --policy-name BANPolicy --target certificateArn_changeme`
   * The command should not return anything if it worked.
4. To attach the second Thing to the Certificate, enter the following command. Replace `certificateArn_changeme` with the value of the attribute `certificateArn` from the output of the certificate creation command (2 steps above). It should be similar to: `arn:aws:iot:region:1234567890:cert/0f11db22dafacda87be0940dd5b2e010635916f541461ccf2d1c56ced0f343ee`
   * `aws iot attach-thing-principal --thing-name ‘sensor_name’ --principal certificateArn_changeme`
   * The command should not return anything if it worked.

## Execute the code and validate telemetry
1. In the Cloud9 terminal, enter the following command to get your specific AWS IoT Endpoint which will then be saved in the endpoint.json file:
   * `aws iot describe-endpoint --endpoint-type iot:Data-ATS > ~/environment/endpoint.json`
2. In the Cloud9 environment, click the circled + icon that is next to your current terminal and select New Terminal. You now have 2 different terminals.
3. In the  terminal, execute the following commands to start the code for sensor. Sensor’s Certificate and Private Key, the Root Certificate Authority and your specific AWS IoT Endpoint will all be read from the files you created.
   * `cd ~/environment/’sensor_name’`
   * `node sensor.js`
> You should see the following:  
> Connected to AWS IoT  
> Sending telemetry data to AWS IoT for sensor  



