const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

function generateTerraformProvider(region) {
    return `
  provider "aws" {
    region = "${region}"
  }
    `;
  }
  
  function generateTerraformEC2Instance(instanceType, amiId, keyName) {
    return `
  resource "aws_instance" "example" {
    ami = "${amiId}"
    instance_type = "${instanceType}"
    key_name = "${keyName}"
  
    tags = {
      Name = "example-instance"
    }
  }
    `;
  }
  
  function generateTerraformRDSInstance(dbInstanceIdentifier, engine, username, password) {
    return `
  resource "aws_db_instance" "default" {
    identifier = "${dbInstanceIdentifier}"
    engine = "${engine}"
    username = "${username}"
    password = "${password}"
    allocated_storage = 20
  }
    `;
  }
  
  function generateTerraformS3Bucket(bucketName) {
    return `
  resource "aws_s3_bucket" "b" {
    bucket = "${bucketName}"
    acl    = "private"
  
    tags = {
      Name        = "My bucket"
      Environment = "Dev"
    }
  }
    `;
  }
  

  app.post('/generate', (req, res) => {
    
    const {
      region,
      instance_type, ami_id, key_name,
      db_instance_identifier, engine, username, password,
      bucket_name
    } = req.body;
  
    const providerScript = generateTerraformProvider(region);
    const ec2InstanceScript = generateTerraformEC2Instance(instance_type, ami_id, key_name);
    const rdsInstanceScript = generateTerraformRDSInstance(db_instance_identifier, engine, username, password);
    const s3BucketScript = generateTerraformS3Bucket(bucket_name);
  
    const fullScript = providerScript + ec2InstanceScript + rdsInstanceScript + s3BucketScript;
  
    res.send(`<pre>${fullScript}</pre>`);
  });
  

app.listen(port, () => {
    console.log(`App écoute sur http://localhost:${port}`);
});
