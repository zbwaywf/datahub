/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.chart;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public enum ChartQueryType { 
  LOOKML, SQL  ;
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"enum\",\"name\":\"ChartQueryType\",\"namespace\":\"com.linkedin.pegasus2avro.chart\",\"symbols\":[\"LOOKML\",\"SQL\"],\"symbolDocs\":{\"LOOKML\":\"LookML queries\",\"SQL\":\"SQL type queries\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
}
