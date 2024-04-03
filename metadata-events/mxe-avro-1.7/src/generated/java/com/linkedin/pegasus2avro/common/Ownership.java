/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.common;  
@SuppressWarnings("all")
/** Ownership information of an entity. */
@org.apache.avro.specific.AvroGenerated
public class Ownership extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"Ownership\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Ownership information of an entity.\",\"fields\":[{\"name\":\"owners\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"Owner\",\"doc\":\"Ownership information\",\"fields\":[{\"name\":\"owner\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)\",\"Relationship\":{\"entityTypes\":[\"corpuser\",\"corpGroup\"],\"name\":\"OwnedBy\"},\"Searchable\":{\"addToFilters\":true,\"fieldName\":\"owners\",\"fieldType\":\"URN\",\"filterNameOverride\":\"Owned By\",\"hasValuesFieldName\":\"hasOwners\",\"queryByDefault\":false},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"OwnershipType\",\"doc\":\"Asset owner types\",\"symbols\":[\"TECHNICAL_OWNER\",\"BUSINESS_OWNER\",\"DATA_STEWARD\",\"NONE\",\"DEVELOPER\",\"DATAOWNER\",\"DELEGATE\",\"PRODUCER\",\"CONSUMER\",\"STAKEHOLDER\"],\"symbolDocs\":{\"BUSINESS_OWNER\":\"A person or group who is responsible for logical, or business related, aspects of the asset.\",\"CONSUMER\":\"A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.\",\"DATAOWNER\":\"A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"DATA_STEWARD\":\"A steward, expert, or delegate responsible for the asset.\",\"DELEGATE\":\"A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"DEVELOPER\":\"A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"NONE\":\"No specific type associated to the owner.\",\"PRODUCER\":\"A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.\",\"STAKEHOLDER\":\"A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.\",\"TECHNICAL_OWNER\":\"person or group who is responsible for technical aspects of the asset.\"},\"deprecatedSymbols\":{\"CONSUMER\":true,\"DATAOWNER\":true,\"DELEGATE\":true,\"DEVELOPER\":true,\"PRODUCER\":true,\"STAKEHOLDER\":true}},\"doc\":\"The type of the ownership\"},{\"name\":\"source\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"OwnershipSource\",\"doc\":\"Source/provider of the ownership information\",\"fields\":[{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"OwnershipSourceType\",\"symbols\":[\"AUDIT\",\"DATABASE\",\"FILE_SYSTEM\",\"ISSUE_TRACKING_SYSTEM\",\"MANUAL\",\"SERVICE\",\"SOURCE_CONTROL\",\"OTHER\"],\"symbolDocs\":{\"AUDIT\":\"Auditing system or audit logs\",\"DATABASE\":\"Database, e.g. GRANTS table\",\"FILE_SYSTEM\":\"File system, e.g. file/directory owner\",\"ISSUE_TRACKING_SYSTEM\":\"Issue tracking system, e.g. Jira\",\"MANUAL\":\"Manually provided by a user\",\"OTHER\":\"Other sources\",\"SERVICE\":\"Other ownership-like service, e.g. Nuage, ACL service etc\",\"SOURCE_CONTROL\":\"SCM system, e.g. GIT, SVN\"}},\"doc\":\"The type of the source\"},{\"name\":\"url\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"A reference URL for the source\",\"default\":null}]}],\"doc\":\"Source information for the ownership\",\"default\":null}]}},\"doc\":\"List of owners of the entity.\"},{\"name\":\"lastModified\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}}],\"Aspect\":{\"name\":\"ownership\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** List of owners of the entity. */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.common.Owner> owners;
  /** Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data. */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp lastModified;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public Ownership() {}

  /**
   * All-args constructor.
   */
  public Ownership(java.util.List<com.linkedin.pegasus2avro.common.Owner> owners, com.linkedin.pegasus2avro.common.AuditStamp lastModified) {
    this.owners = owners;
    this.lastModified = lastModified;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return owners;
    case 1: return lastModified;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: owners = (java.util.List<com.linkedin.pegasus2avro.common.Owner>)value$; break;
    case 1: lastModified = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
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

  /**
   * Gets the value of the 'lastModified' field.
   * Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data.   */
  public com.linkedin.pegasus2avro.common.AuditStamp getLastModified() {
    return lastModified;
  }

  /**
   * Sets the value of the 'lastModified' field.
   * Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data.   * @param value the value to set.
   */
  public void setLastModified(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.lastModified = value;
  }

  /** Creates a new Ownership RecordBuilder */
  public static com.linkedin.pegasus2avro.common.Ownership.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.common.Ownership.Builder();
  }
  
  /** Creates a new Ownership RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.common.Ownership.Builder newBuilder(com.linkedin.pegasus2avro.common.Ownership.Builder other) {
    return new com.linkedin.pegasus2avro.common.Ownership.Builder(other);
  }
  
  /** Creates a new Ownership RecordBuilder by copying an existing Ownership instance */
  public static com.linkedin.pegasus2avro.common.Ownership.Builder newBuilder(com.linkedin.pegasus2avro.common.Ownership other) {
    return new com.linkedin.pegasus2avro.common.Ownership.Builder(other);
  }
  
  /**
   * RecordBuilder for Ownership instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<Ownership>
    implements org.apache.avro.data.RecordBuilder<Ownership> {

    private java.util.List<com.linkedin.pegasus2avro.common.Owner> owners;
    private com.linkedin.pegasus2avro.common.AuditStamp lastModified;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.common.Ownership.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.common.Ownership.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.owners)) {
        this.owners = data().deepCopy(fields()[0].schema(), other.owners);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[1].schema(), other.lastModified);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing Ownership instance */
    private Builder(com.linkedin.pegasus2avro.common.Ownership other) {
            super(com.linkedin.pegasus2avro.common.Ownership.SCHEMA$);
      if (isValidValue(fields()[0], other.owners)) {
        this.owners = data().deepCopy(fields()[0].schema(), other.owners);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[1].schema(), other.lastModified);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'owners' field */
    public java.util.List<com.linkedin.pegasus2avro.common.Owner> getOwners() {
      return owners;
    }
    
    /** Sets the value of the 'owners' field */
    public com.linkedin.pegasus2avro.common.Ownership.Builder setOwners(java.util.List<com.linkedin.pegasus2avro.common.Owner> value) {
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
    public com.linkedin.pegasus2avro.common.Ownership.Builder clearOwners() {
      owners = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getLastModified() {
      return lastModified;
    }
    
    /** Sets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.common.Ownership.Builder setLastModified(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[1], value);
      this.lastModified = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'lastModified' field has been set */
    public boolean hasLastModified() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.common.Ownership.Builder clearLastModified() {
      lastModified = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public Ownership build() {
      try {
        Ownership record = new Ownership();
        record.owners = fieldSetFlags()[0] ? this.owners : (java.util.List<com.linkedin.pegasus2avro.common.Owner>) defaultValue(fields()[0]);
        record.lastModified = fieldSetFlags()[1] ? this.lastModified : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
