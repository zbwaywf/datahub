/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.common;  
@SuppressWarnings("all")
/** Ownership information of an entity, suggested by source system or other services. */
@org.apache.avro.specific.AvroGenerated
public class OwnershipSuggestion extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"OwnershipSuggestion\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Ownership information of an entity, suggested by source system or other services.\",\"fields\":[{\"name\":\"owners\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"Owner\",\"doc\":\"Ownership information\",\"fields\":[{\"name\":\"owner\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)\",\"Relationship\":{\"entityTypes\":[\"corpuser\",\"corpGroup\"],\"name\":\"OwnedBy\"},\"Searchable\":{\"addToFilters\":true,\"fieldName\":\"owners\",\"fieldType\":\"URN\",\"filterNameOverride\":\"Owned By\",\"hasValuesFieldName\":\"hasOwners\",\"queryByDefault\":false},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"OwnershipType\",\"doc\":\"Asset owner types\",\"symbols\":[\"TECHNICAL_OWNER\",\"BUSINESS_OWNER\",\"DATA_STEWARD\",\"NONE\",\"DEVELOPER\",\"DATAOWNER\",\"DELEGATE\",\"PRODUCER\",\"CONSUMER\",\"STAKEHOLDER\"],\"symbolDocs\":{\"BUSINESS_OWNER\":\"A person or group who is responsible for logical, or business related, aspects of the asset.\",\"CONSUMER\":\"A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.\",\"DATAOWNER\":\"A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"DATA_STEWARD\":\"A steward, expert, or delegate responsible for the asset.\",\"DELEGATE\":\"A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"DEVELOPER\":\"A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"NONE\":\"No specific type associated to the owner.\",\"PRODUCER\":\"A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"STAKEHOLDER\":\"A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.\",\"TECHNICAL_OWNER\":\"person or group who is responsible for technical aspects of the asset.\"},\"deprecatedSymbols\":{\"CONSUMER\":true,\"DATAOWNER\":true,\"DELEGATE\":true,\"DEVELOPER\":true,\"PRODUCER\":true,\"STAKEHOLDER\":true}},\"doc\":\"The type of the ownership\"},{\"name\":\"source\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"OwnershipSource\",\"doc\":\"Source/provider of the ownership information\",\"fields\":[{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"OwnershipSourceType\",\"symbols\":[\"AUDIT\",\"DATABASE\",\"FILE_SYSTEM\",\"ISSUE_TRACKING_SYSTEM\",\"MANUAL\",\"SERVICE\",\"SOURCE_CONTROL\",\"OTHER\"],\"symbolDocs\":{\"AUDIT\":\"Auditing system or audit logs\",\"DATABASE\":\"Database, e.g. GRANTS table\",\"FILE_SYSTEM\":\"File system, e.g. file/directory owner\",\"ISSUE_TRACKING_SYSTEM\":\"Issue tracking system, e.g. Jira\",\"MANUAL\":\"Manually provided by a user\",\"OTHER\":\"Other sources\",\"SERVICE\":\"Other ownership-like service, e.g. Nuage, ACL service etc\",\"SOURCE_CONTROL\":\"SCM system, e.g. GIT, SVN\"}},\"doc\":\"The type of the source\"},{\"name\":\"url\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"A reference URL for the source\",\"default\":null}]}],\"doc\":\"Source information for the ownership\",\"default\":null}]}},\"doc\":\"List of owners of the entity.\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** List of owners of the entity. */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.common.Owner> owners;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public OwnershipSuggestion() {}

  /**
   * All-args constructor.
   */
  public OwnershipSuggestion(java.util.List<com.linkedin.pegasus2avro.common.Owner> owners) {
    this.owners = owners;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return owners;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: owners = (java.util.List<com.linkedin.pegasus2avro.common.Owner>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'owners' field.
   * List of owners of the entity.   */
  public java.util.List<com.linkedin.pegasus2avro.common.Owner> getOwners() {
    return owners;
  }

  /**
   * Sets the value of the 'owners' field.
   * List of owners of the entity.   * @param value the value to set.
   */
  public void setOwners(java.util.List<com.linkedin.pegasus2avro.common.Owner> value) {
    this.owners = value;
  }

  /** Creates a new OwnershipSuggestion RecordBuilder */
  public static com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder();
  }
  
  /** Creates a new OwnershipSuggestion RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder newBuilder(com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder other) {
    return new com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder(other);
  }
  
  /** Creates a new OwnershipSuggestion RecordBuilder by copying an existing OwnershipSuggestion instance */
  public static com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder newBuilder(com.linkedin.pegasus2avro.common.OwnershipSuggestion other) {
    return new com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder(other);
  }
  
  /**
   * RecordBuilder for OwnershipSuggestion instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<OwnershipSuggestion>
    implements org.apache.avro.data.RecordBuilder<OwnershipSuggestion> {

    private java.util.List<com.linkedin.pegasus2avro.common.Owner> owners;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.common.OwnershipSuggestion.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.owners)) {
        this.owners = data().deepCopy(fields()[0].schema(), other.owners);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing OwnershipSuggestion instance */
    private Builder(com.linkedin.pegasus2avro.common.OwnershipSuggestion other) {
            super(com.linkedin.pegasus2avro.common.OwnershipSuggestion.SCHEMA$);
      if (isValidValue(fields()[0], other.owners)) {
        this.owners = data().deepCopy(fields()[0].schema(), other.owners);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'owners' field */
    public java.util.List<com.linkedin.pegasus2avro.common.Owner> getOwners() {
      return owners;
    }
    
    /** Sets the value of the 'owners' field */
    public com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder setOwners(java.util.List<com.linkedin.pegasus2avro.common.Owner> value) {
      validate(fields()[0], value);
      this.owners = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'owners' field has been set */
    public boolean hasOwners() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'owners' field */
    public com.linkedin.pegasus2avro.common.OwnershipSuggestion.Builder clearOwners() {
      owners = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public OwnershipSuggestion build() {
      try {
        OwnershipSuggestion record = new OwnershipSuggestion();
        record.owners = fieldSetFlags()[0] ? this.owners : (java.util.List<com.linkedin.pegasus2avro.common.Owner>) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
