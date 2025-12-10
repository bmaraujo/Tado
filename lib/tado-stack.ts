import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as constants from '../common/constants';

export class TadoStack extends cdk.Stack {
  readonly tasksDb : dynamodb.Table;
  readonly personDb : dynamodb.Table;
  readonly executionDb : dynamodb.Table;
  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    this.tasksDb = new dynamodb.Table(this, `${constants.TADO_SUFFIX}_TasksDb`,{
      tableName: `${constants.TADO_SUFFIX}_tasks`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      },
      readCapacity:1,
      writeCapacity:1
    });

    this.personDb = new dynamodb.Table(this, `${constants.TADO_SUFFIX}_PersonDb`,{
      tableName: `${constants.TADO_SUFFIX}_person`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      },
      readCapacity:1,
      writeCapacity:1
    });

    this.executionDb = new dynamodb.Table(this, `${constants.TADO_SUFFIX}_ExecutionDb`,{
      tableName: `${constants.TADO_SUFFIX}_execution`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {
        name: 'pk',
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: 'sk',
        type: dynamodb.AttributeType.STRING
      },
      readCapacity:1,
      writeCapacity:1
    });
  }
}
