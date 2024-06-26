/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.ml.metadata;  
@SuppressWarnings("all")
/** Model endpoint statuses */
@org.apache.avro.specific.AvroGenerated
public enum DeploymentStatus { 
  OUT_OF_SERVICE, CREATING, UPDATING, ROLLING_BACK, IN_SERVICE, DELETING, FAILED, UNKNOWN  ;
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"enum\",\"name\":\"DeploymentStatus\",\"namespace\":\"com.linkedin.pegasus2avro.ml.metadata\",\"doc\":\"Model endpoint statuses\",\"symbols\":[\"OUT_OF_SERVICE\",\"CREATING\",\"UPDATING\",\"ROLLING_BACK\",\"IN_SERVICE\",\"DELETING\",\"FAILED\",\"UNKNOWN\"],\"symbolDocs\":{\"CREATING\":\"Deployments being created.\",\"DELETING\":\"Deployments being deleted.\",\"FAILED\":\"Deployments with an error state.\",\"IN_SERVICE\":\"Deployments that are active.\",\"OUT_OF_SERVICE\":\"Deployments out of service.\",\"ROLLING_BACK\":\"Deployments being reverted to a previous version.\",\"UNKNOWN\":\"Deployments with unknown/unmappable state.\",\"UPDATING\":\"Deployments being updated.\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
}
