/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.ml.metadata;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public enum SourceCodeUrlType { 
  ML_MODEL_SOURCE_CODE, TRAINING_PIPELINE_SOURCE_CODE, EVALUATION_PIPELINE_SOURCE_CODE  ;
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"enum\",\"name\":\"SourceCodeUrlType\",\"namespace\":\"com.linkedin.pegasus2avro.ml.metadata\",\"symbols\":[\"ML_MODEL_SOURCE_CODE\",\"TRAINING_PIPELINE_SOURCE_CODE\",\"EVALUATION_PIPELINE_SOURCE_CODE\"]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
}
