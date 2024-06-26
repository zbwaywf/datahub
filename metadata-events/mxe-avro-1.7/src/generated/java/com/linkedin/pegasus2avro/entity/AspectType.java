/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.entity;  
@SuppressWarnings("all")
/** The type of a DataHub aspect */
@org.apache.avro.specific.AvroGenerated
public enum AspectType { 
  VERSIONED, TIMESERIES  ;
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"enum\",\"name\":\"AspectType\",\"namespace\":\"com.linkedin.pegasus2avro.entity\",\"doc\":\"The type of a DataHub aspect\",\"symbols\":[\"VERSIONED\",\"TIMESERIES\"],\"symbolDocs\":{\"TIMESERIES\":\"Designates an aspect that represents a point-in-time data point\",\"VERSIONED\":\"Designates an aspect that has a monotonically increasing version number\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
}
