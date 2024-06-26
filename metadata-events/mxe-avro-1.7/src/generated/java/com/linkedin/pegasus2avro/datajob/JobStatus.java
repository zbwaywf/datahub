/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.datajob;  
@SuppressWarnings("all")
/** Job statuses */
@org.apache.avro.specific.AvroGenerated
public enum JobStatus { 
  STARTING, IN_PROGRESS, STOPPING, STOPPED, COMPLETED, FAILED, UNKNOWN, SKIPPED  ;
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"enum\",\"name\":\"JobStatus\",\"namespace\":\"com.linkedin.pegasus2avro.datajob\",\"doc\":\"Job statuses\",\"symbols\":[\"STARTING\",\"IN_PROGRESS\",\"STOPPING\",\"STOPPED\",\"COMPLETED\",\"FAILED\",\"UNKNOWN\",\"SKIPPED\"],\"symbolDocs\":{\"COMPLETED\":\"Jobs with successful completion.\",\"FAILED\":\"Jobs that have failed.\",\"IN_PROGRESS\":\"Jobs currently running.\",\"SKIPPED\":\"Jobs that have been skipped.\",\"STARTING\":\"Jobs being initialized.\",\"STOPPED\":\"Jobs that have stopped.\",\"STOPPING\":\"Jobs being stopped.\",\"UNKNOWN\":\"Jobs with unknown status (either unmappable or unavailable)\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
}
