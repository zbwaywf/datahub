/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.snapshot;  
@SuppressWarnings("all")
/** A metadata snapshot for a specific CorpUser entity. */
@org.apache.avro.specific.AvroGenerated
public class CorpUserSnapshot extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"CorpUserSnapshot\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.snapshot\",\"doc\":\"A metadata snapshot for a specific CorpUser entity.\",\"fields\":[{\"name\":\"urn\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"URN for the entity the metadata snapshot is associated with.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.CorpuserUrn\"}},{\"name\":\"aspects\",\"type\":{\"type\":\"array\",\"items\":[{\"type\":\"record\",\"name\":\"CorpUserKey\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.key\",\"doc\":\"Key for a CorpUser\",\"fields\":[{\"name\":\"username\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the AD/LDAP user.\",\"Searchable\":{\"boostScore\":2.0,\"enableAutocomplete\":true,\"fieldName\":\"ldap\",\"fieldType\":\"TEXT_PARTIAL\"}}],\"Aspect\":{\"name\":\"corpUserKey\"}},{\"type\":\"record\",\"name\":\"CorpUserInfo\",\"namespace\":\"com.linkedin.pegasus2avro.identity\",\"doc\":\"Linkedin corp user information\",\"fields\":[{\"name\":\"customProperties\",\"type\":{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"},\"doc\":\"Custom property bag.\",\"default\":{},\"Searchable\":{\"/*\":{\"queryByDefault\":true}}},{\"name\":\"active\",\"type\":\"boolean\",\"doc\":\"Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools\",\"Searchable\":{\"fieldType\":\"BOOLEAN\",\"weightsPerFieldValue\":{\"true\":2.0}}},{\"name\":\"displayName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"displayName of this user ,  e.g.  Hang Zhang(DataHQ)\",\"default\":null,\"Searchable\":{\"boostScore\":10.0,\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\",\"queryByDefault\":true}},{\"name\":\"email\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"email address of this user\",\"default\":null,\"Searchable\":{\"fieldType\":\"KEYWORD\",\"queryByDefault\":true}},{\"name\":\"title\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"title of this user\",\"default\":null,\"Searchable\":{\"fieldType\":\"KEYWORD\",\"queryByDefault\":true}},{\"name\":\"managerUrn\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"direct manager of this user\",\"default\":null,\"Relationship\":{\"entityTypes\":[\"corpuser\"],\"name\":\"ReportsTo\"},\"Searchable\":{\"fieldName\":\"managerLdap\",\"fieldType\":\"URN\",\"queryByDefault\":true},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.CorpuserUrn\"}},{\"name\":\"departmentId\",\"type\":[\"null\",\"long\"],\"doc\":\"department id this user belong to\",\"default\":null},{\"name\":\"departmentName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"department name this user belong to\",\"default\":null},{\"name\":\"firstName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"first name of this user\",\"default\":null},{\"name\":\"lastName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"last name of this user\",\"default\":null},{\"name\":\"fullName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Common name of this user, format is firstName + lastName (split by a whitespace)\",\"default\":null,\"Searchable\":{\"boostScore\":10.0,\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\",\"queryByDefault\":true}},{\"name\":\"countryCode\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"two uppercase letters country code. e.g.  US\",\"default\":null}],\"Aspect\":{\"EntityUrns\":[\"com.linkedin.pegasus2avro.common.CorpuserUrn\"],\"name\":\"corpUserInfo\"}},{\"type\":\"record\",\"name\":\"CorpUserEditableInfo\",\"namespace\":\"com.linkedin.pegasus2avro.identity\",\"doc\":\"Linkedin corp user information that can be edited from UI\",\"fields\":[{\"name\":\"aboutMe\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"About me section of the user\",\"default\":null},{\"name\":\"teams\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Teams that the user belongs to e.g. Metadata\",\"default\":[],\"Searchable\":{\"/*\":{\"fieldType\":\"TEXT\"}}},{\"name\":\"skills\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Skills that the user possesses e.g. Machine Learning\",\"default\":[],\"Searchable\":{\"/*\":{\"fieldType\":\"TEXT\"}}},{\"name\":\"pictureLink\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"A URL which points to a picture which user wants to set as a profile photo\",\"default\":\"https://raw.githubusercontent.com/datahub-project/datahub/master/datahub-web-react/src/images/default_avatar.png\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.url.Url\",\"coercerClass\":\"com.linkedin.pegasus2avro.common.url.UrlCoercer\"}},{\"name\":\"displayName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"DataHub-native display name\",\"default\":null,\"Searchable\":{\"boostScore\":10.0,\"fieldType\":\"TEXT_PARTIAL\",\"queryByDefault\":true}},{\"name\":\"title\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"DataHub-native Title, e.g. 'Software Engineer'\",\"default\":null},{\"name\":\"slack\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Slack handle for the user\",\"default\":null},{\"name\":\"phone\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Phone number to contact the user\",\"default\":null},{\"name\":\"email\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Email address to contact the user\",\"default\":null}],\"Aspect\":{\"EntityUrns\":[\"com.linkedin.pegasus2avro.common.CorpuserUrn\"],\"name\":\"corpUserEditableInfo\"}},{\"type\":\"record\",\"name\":\"CorpUserStatus\",\"namespace\":\"com.linkedin.pegasus2avro.identity\",\"doc\":\"The status of the user, e.g. provisioned, active, suspended, etc.\",\"fields\":[{\"name\":\"status\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Status of the user, e.g. PROVISIONED / ACTIVE / SUSPENDED\",\"Searchable\":{\"fieldType\":\"KEYWORD\"}},{\"name\":\"lastModified\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"Audit stamp containing who last modified the status and when.\"}],\"Aspect\":{\"name\":\"corpUserStatus\"}},{\"type\":\"record\",\"name\":\"GroupMembership\",\"namespace\":\"com.linkedin.pegasus2avro.identity\",\"doc\":\"Carries information about the CorpGroups a user is in.\",\"fields\":[{\"name\":\"groups\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"Relationship\":{\"/*\":{\"entityTypes\":[\"corpGroup\"],\"name\":\"IsMemberOfGroup\"}}}],\"Aspect\":{\"name\":\"groupMembership\"}},{\"type\":\"record\",\"name\":\"GlobalTags\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Tag aspect used for applying tags to an entity\",\"fields\":[{\"name\":\"tags\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"TagAssociation\",\"doc\":\"Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters.\",\"fields\":[{\"name\":\"tag\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Urn of the applied tag\",\"","Relationship\":{\"entityTypes\":[\"tag\"],\"name\":\"TaggedWith\"},\"Searchable\":{\"addToFilters\":true,\"fieldName\":\"tags\",\"fieldType\":\"URN\",\"filterNameOverride\":\"Tag\",\"hasValuesFieldName\":\"hasTags\"},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.TagUrn\"}},{\"name\":\"context\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context about the association\",\"default\":null}]}},\"doc\":\"Tags associated with a given entity\",\"Searchable\":{\"/*/tag\":{\"addToFilters\":true,\"boostScore\":0.5,\"fieldName\":\"tags\",\"fieldType\":\"URN\",\"queryByDefault\":true}}}],\"Aspect\":{\"name\":\"globalTags\"}},{\"type\":\"record\",\"name\":\"Status\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally.\",\"fields\":[{\"name\":\"removed\",\"type\":\"boolean\",\"doc\":\"Whether the entity has been removed (soft-deleted).\",\"default\":false,\"Searchable\":{\"fieldType\":\"BOOLEAN\"}}],\"Aspect\":{\"name\":\"status\"}}]},\"doc\":\"The list of metadata aspects associated with the CorpUser. Depending on the use case, this can either be all, or a selection, of supported aspects.\"}],\"Entity\":{\"keyAspect\":\"corpUserKey\",\"name\":\"corpuser\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** URN for the entity the metadata snapshot is associated with. */
  @Deprecated public java.lang.String urn;
  /** The list of metadata aspects associated with the CorpUser. Depending on the use case, this can either be all, or a selection, of supported aspects. */
  @Deprecated public java.util.List<java.lang.Object> aspects;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public CorpUserSnapshot() {}

  /**
   * All-args constructor.
   */
  public CorpUserSnapshot(java.lang.String urn, java.util.List<java.lang.Object> aspects) {
    this.urn = urn;
    this.aspects = aspects;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return urn;
    case 1: return aspects;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: urn = (java.lang.String)value$; break;
    case 1: aspects = (java.util.List<java.lang.Object>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'urn' field.
   * URN for the entity the metadata snapshot is associated with.   */
  public java.lang.String getUrn() {
    return urn;
  }

  /**
   * Sets the value of the 'urn' field.
   * URN for the entity the metadata snapshot is associated with.   * @param value the value to set.
   */
  public void setUrn(java.lang.String value) {
    this.urn = value;
  }

  /**
   * Gets the value of the 'aspects' field.
   * The list of metadata aspects associated with the CorpUser. Depending on the use case, this can either be all, or a selection, of supported aspects.   */
  public java.util.List<java.lang.Object> getAspects() {
    return aspects;
  }

  /**
   * Sets the value of the 'aspects' field.
   * The list of metadata aspects associated with the CorpUser. Depending on the use case, this can either be all, or a selection, of supported aspects.   * @param value the value to set.
   */
  public void setAspects(java.util.List<java.lang.Object> value) {
    this.aspects = value;
  }

  /** Creates a new CorpUserSnapshot RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder();
  }
  
  /** Creates a new CorpUserSnapshot RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder newBuilder(com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder(other);
  }
  
  /** Creates a new CorpUserSnapshot RecordBuilder by copying an existing CorpUserSnapshot instance */
  public static com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder newBuilder(com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot other) {
    return new com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder(other);
  }
  
  /**
   * RecordBuilder for CorpUserSnapshot instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<CorpUserSnapshot>
    implements org.apache.avro.data.RecordBuilder<CorpUserSnapshot> {

    private java.lang.String urn;
    private java.util.List<java.lang.Object> aspects;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.urn)) {
        this.urn = data().deepCopy(fields()[0].schema(), other.urn);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.aspects)) {
        this.aspects = data().deepCopy(fields()[1].schema(), other.aspects);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing CorpUserSnapshot instance */
    private Builder(com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot other) {
            super(com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.SCHEMA$);
      if (isValidValue(fields()[0], other.urn)) {
        this.urn = data().deepCopy(fields()[0].schema(), other.urn);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.aspects)) {
        this.aspects = data().deepCopy(fields()[1].schema(), other.aspects);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'urn' field */
    public java.lang.String getUrn() {
      return urn;
    }
    
    /** Sets the value of the 'urn' field */
    public com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder setUrn(java.lang.String value) {
      validate(fields()[0], value);
      this.urn = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'urn' field has been set */
    public boolean hasUrn() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'urn' field */
    public com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder clearUrn() {
      urn = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'aspects' field */
    public java.util.List<java.lang.Object> getAspects() {
      return aspects;
    }
    
    /** Sets the value of the 'aspects' field */
    public com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder setAspects(java.util.List<java.lang.Object> value) {
      validate(fields()[1], value);
      this.aspects = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'aspects' field has been set */
    public boolean hasAspects() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'aspects' field */
    public com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot.Builder clearAspects() {
      aspects = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public CorpUserSnapshot build() {
      try {
        CorpUserSnapshot record = new CorpUserSnapshot();
        record.urn = fieldSetFlags()[0] ? this.urn : (java.lang.String) defaultValue(fields()[0]);
        record.aspects = fieldSetFlags()[1] ? this.aspects : (java.util.List<java.lang.Object>) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
