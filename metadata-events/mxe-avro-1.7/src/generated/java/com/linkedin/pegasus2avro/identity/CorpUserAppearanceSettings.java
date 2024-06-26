/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.identity;  
@SuppressWarnings("all")
/** Settings for a user around the appearance of their DataHub UI */
@org.apache.avro.specific.AvroGenerated
public class CorpUserAppearanceSettings extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"CorpUserAppearanceSettings\",\"namespace\":\"com.linkedin.pegasus2avro.identity\",\"doc\":\"Settings for a user around the appearance of their DataHub UI\",\"fields\":[{\"name\":\"showSimplifiedHomepage\",\"type\":[\"null\",\"boolean\"],\"doc\":\"Flag whether the user should see a homepage with only datasets, charts and dashboards. Intended for users\\nwho have less operational use cases for the datahub tool.\",\"default\":null}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Flag whether the user should see a homepage with only datasets, charts and dashboards. Intended for users
who have less operational use cases for the datahub tool. */
  @Deprecated public java.lang.Boolean showSimplifiedHomepage;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public CorpUserAppearanceSettings() {}

  /**
   * All-args constructor.
   */
  public CorpUserAppearanceSettings(java.lang.Boolean showSimplifiedHomepage) {
    this.showSimplifiedHomepage = showSimplifiedHomepage;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return showSimplifiedHomepage;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: showSimplifiedHomepage = (java.lang.Boolean)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'showSimplifiedHomepage' field.
   * Flag whether the user should see a homepage with only datasets, charts and dashboards. Intended for users
who have less operational use cases for the datahub tool.   */
  public java.lang.Boolean getShowSimplifiedHomepage() {
    return showSimplifiedHomepage;
  }

  /**
   * Sets the value of the 'showSimplifiedHomepage' field.
   * Flag whether the user should see a homepage with only datasets, charts and dashboards. Intended for users
who have less operational use cases for the datahub tool.   * @param value the value to set.
   */
  public void setShowSimplifiedHomepage(java.lang.Boolean value) {
    this.showSimplifiedHomepage = value;
  }

  /** Creates a new CorpUserAppearanceSettings RecordBuilder */
  public static com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder();
  }
  
  /** Creates a new CorpUserAppearanceSettings RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder newBuilder(com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder other) {
    return new com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder(other);
  }
  
  /** Creates a new CorpUserAppearanceSettings RecordBuilder by copying an existing CorpUserAppearanceSettings instance */
  public static com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder newBuilder(com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings other) {
    return new com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder(other);
  }
  
  /**
   * RecordBuilder for CorpUserAppearanceSettings instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<CorpUserAppearanceSettings>
    implements org.apache.avro.data.RecordBuilder<CorpUserAppearanceSettings> {

    private java.lang.Boolean showSimplifiedHomepage;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.showSimplifiedHomepage)) {
        this.showSimplifiedHomepage = data().deepCopy(fields()[0].schema(), other.showSimplifiedHomepage);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing CorpUserAppearanceSettings instance */
    private Builder(com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings other) {
            super(com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.SCHEMA$);
      if (isValidValue(fields()[0], other.showSimplifiedHomepage)) {
        this.showSimplifiedHomepage = data().deepCopy(fields()[0].schema(), other.showSimplifiedHomepage);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'showSimplifiedHomepage' field */
    public java.lang.Boolean getShowSimplifiedHomepage() {
      return showSimplifiedHomepage;
    }
    
    /** Sets the value of the 'showSimplifiedHomepage' field */
    public com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder setShowSimplifiedHomepage(java.lang.Boolean value) {
      validate(fields()[0], value);
      this.showSimplifiedHomepage = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'showSimplifiedHomepage' field has been set */
    public boolean hasShowSimplifiedHomepage() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'showSimplifiedHomepage' field */
    public com.linkedin.pegasus2avro.identity.CorpUserAppearanceSettings.Builder clearShowSimplifiedHomepage() {
      showSimplifiedHomepage = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public CorpUserAppearanceSettings build() {
      try {
        CorpUserAppearanceSettings record = new CorpUserAppearanceSettings();
        record.showSimplifiedHomepage = fieldSetFlags()[0] ? this.showSimplifiedHomepage : (java.lang.Boolean) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
