/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.dataprocess;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public enum DataProcessRunStatus { 
  STARTED, COMPLETE  ;
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"enum\",\"name\":\"DataProcessRunStatus\",\"namespace\":\"com.linkedin.pegasus2avro.dataprocess\",\"symbols\":[\"STARTED\",\"COMPLETE\"],\"symbolDocs\":{\"STARTED\":\"The status where the Data processing run is in.\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
}
