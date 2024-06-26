/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.platform.event.v1;  
@SuppressWarnings("all")
/** Arbitrary key-value parameters for an Entity Change Event. (any record). */
@org.apache.avro.specific.AvroGenerated
public class Parameters extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"Parameters\",\"namespace\":\"com.linkedin.pegasus2avro.platform.event.v1\",\"doc\":\"Arbitrary key-value parameters for an Entity Change Event. (any record).\",\"fields\":[]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /** Creates a new Parameters RecordBuilder */
  public static com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder();
  }
  
  /** Creates a new Parameters RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder newBuilder(com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder other) {
    return new com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder(other);
  }
  
  /** Creates a new Parameters RecordBuilder by copying an existing Parameters instance */
  public static com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder newBuilder(com.linkedin.pegasus2avro.platform.event.v1.Parameters other) {
    return new com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder(other);
  }
  
  /**
   * RecordBuilder for Parameters instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<Parameters>
    implements org.apache.avro.data.RecordBuilder<Parameters> {


    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.platform.event.v1.Parameters.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.platform.event.v1.Parameters.Builder other) {
      super(other);
    }
    
    /** Creates a Builder by copying an existing Parameters instance */
    private Builder(com.linkedin.pegasus2avro.platform.event.v1.Parameters other) {
            super(com.linkedin.pegasus2avro.platform.event.v1.Parameters.SCHEMA$);
    }

    @Override
    public Parameters build() {
      try {
        Parameters record = new Parameters();
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
