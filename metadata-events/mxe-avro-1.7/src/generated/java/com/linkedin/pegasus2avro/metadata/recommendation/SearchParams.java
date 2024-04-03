/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.recommendation;  
@SuppressWarnings("all")
/** Context to define the search recommendations */
@org.apache.avro.specific.AvroGenerated
public class SearchParams extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"SearchParams\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.recommendation\",\"doc\":\"Context to define the search recommendations\",\"fields\":[{\"name\":\"types\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Entity types to be searched. If this is not provided, all entities will be searched.\",\"default\":[]},{\"name\":\"query\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Search query\"},{\"name\":\"filters\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"Criterion\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.query.filter\",\"doc\":\"A criterion for matching a field with given value\",\"fields\":[{\"name\":\"field\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the field that the criterion refers to\"},{\"name\":\"value\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The value of the intended field\"},{\"name\":\"values\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Values. one of which the intended field should match\\nNote, if values is set, the above \\\"value\\\" field will be ignored\",\"default\":[]},{\"name\":\"condition\",\"type\":{\"type\":\"enum\",\"name\":\"Condition\",\"doc\":\"The matching condition in a filter criterion\",\"symbols\":[\"CONTAIN\",\"END_WITH\",\"EQUAL\",\"IS_NULL\",\"GREATER_THAN\",\"GREATER_THAN_OR_EQUAL_TO\",\"IN\",\"LESS_THAN\",\"LESS_THAN_OR_EQUAL_TO\",\"START_WITH\"],\"symbolDocs\":{\"CONTAIN\":\"Represent the relation: String field contains value, e.g. name contains Profile\",\"END_WITH\":\"Represent the relation: String field ends with value, e.g. name ends with Event\",\"EQUAL\":\"Represent the relation: field = value, e.g. platform = hdfs\",\"GREATER_THAN\":\"Represent the relation greater than, e.g. ownerCount > 5\",\"GREATER_THAN_OR_EQUAL_TO\":\"Represent the relation greater than or equal to, e.g. ownerCount >= 5\",\"IN\":\"Represent the relation: String field is one of the array values to, e.g. name in [\\\"Profile\\\", \\\"Event\\\"]\",\"IS_NULL\":\"Represent the relation: field is null, e.g. platform is null\",\"LESS_THAN\":\"Represent the relation less than, e.g. ownerCount < 3\",\"LESS_THAN_OR_EQUAL_TO\":\"Represent the relation less than or equal to, e.g. ownerCount <= 3\",\"START_WITH\":\"Represent the relation: String field starts with value, e.g. name starts with PageView\"}},\"doc\":\"The condition for the criterion, e.g. EQUAL, START_WITH\",\"default\":\"EQUAL\"},{\"name\":\"negated\",\"type\":\"boolean\",\"doc\":\"Whether the condition should be negated\",\"default\":false}]}},\"doc\":\"Filters\",\"default\":[]}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Entity types to be searched. If this is not provided, all entities will be searched. */
  @Deprecated public java.util.List<java.lang.String> types;
  /** Search query */
  @Deprecated public java.lang.String query;
  /** Filters */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> filters;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public SearchParams() {}

  /**
   * All-args constructor.
   */
  public SearchParams(java.util.List<java.lang.String> types, java.lang.String query, java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> filters) {
    this.types = types;
    this.query = query;
    this.filters = filters;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return types;
    case 1: return query;
    case 2: return filters;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: types = (java.util.List<java.lang.String>)value$; break;
    case 1: query = (java.lang.String)value$; break;
    case 2: filters = (java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'types' field.
   * Entity types to be searched. If this is not provided, all entities will be searched.   */
  public java.util.List<java.lang.String> getTypes() {
    return types;
  }

  /**
   * Sets the value of the 'types' field.
   * Entity types to be searched. If this is not provided, all entities will be searched.   * @param value the value to set.
   */
  public void setTypes(java.util.List<java.lang.String> value) {
    this.types = value;
  }

  /**
   * Gets the value of the 'query' field.
   * Search query   */
  public java.lang.String getQuery() {
    return query;
  }

  /**
   * Sets the value of the 'query' field.
   * Search query   * @param value the value to set.
   */
  public void setQuery(java.lang.String value) {
    this.query = value;
  }

  /**
   * Gets the value of the 'filters' field.
   * Filters   */
  public java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> getFilters() {
    return filters;
  }

  /**
   * Sets the value of the 'filters' field.
   * Filters   * @param value the value to set.
   */
  public void setFilters(java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> value) {
    this.filters = value;
  }

  /** Creates a new SearchParams RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder();
  }
  
  /** Creates a new SearchParams RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder newBuilder(com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder(other);
  }
  
  /** Creates a new SearchParams RecordBuilder by copying an existing SearchParams instance */
  public static com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder newBuilder(com.linkedin.pegasus2avro.metadata.recommendation.SearchParams other) {
    return new com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder(other);
  }
  
  /**
   * RecordBuilder for SearchParams instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<SearchParams>
    implements org.apache.avro.data.RecordBuilder<SearchParams> {

    private java.util.List<java.lang.String> types;
    private java.lang.String query;
    private java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> filters;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.types)) {
        this.types = data().deepCopy(fields()[0].schema(), other.types);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.query)) {
        this.query = data().deepCopy(fields()[1].schema(), other.query);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.filters)) {
        this.filters = data().deepCopy(fields()[2].schema(), other.filters);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing SearchParams instance */
    private Builder(com.linkedin.pegasus2avro.metadata.recommendation.SearchParams other) {
            super(com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.SCHEMA$);
      if (isValidValue(fields()[0], other.types)) {
        this.types = data().deepCopy(fields()[0].schema(), other.types);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.query)) {
        this.query = data().deepCopy(fields()[1].schema(), other.query);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.filters)) {
        this.filters = data().deepCopy(fields()[2].schema(), other.filters);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'types' field */
    public java.util.List<java.lang.String> getTypes() {
      return types;
    }
    
    /** Sets the value of the 'types' field */
    public com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder setTypes(java.util.List<java.lang.String> value) {
      validate(fields()[0], value);
      this.types = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'types' field has been set */
    public boolean hasTypes() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'types' field */
    public com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder clearTypes() {
      types = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'query' field */
    public java.lang.String getQuery() {
      return query;
    }
    
    /** Sets the value of the 'query' field */
    public com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder setQuery(java.lang.String value) {
      validate(fields()[1], value);
      this.query = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'query' field has been set */
    public boolean hasQuery() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'query' field */
    public com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder clearQuery() {
      query = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'filters' field */
    public java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> getFilters() {
      return filters;
    }
    
    /** Sets the value of the 'filters' field */
    public com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder setFilters(java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion> value) {
      validate(fields()[2], value);
      this.filters = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'filters' field has been set */
    public boolean hasFilters() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'filters' field */
    public com.linkedin.pegasus2avro.metadata.recommendation.SearchParams.Builder clearFilters() {
      filters = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public SearchParams build() {
      try {
        SearchParams record = new SearchParams();
        record.types = fieldSetFlags()[0] ? this.types : (java.util.List<java.lang.String>) defaultValue(fields()[0]);
        record.query = fieldSetFlags()[1] ? this.query : (java.lang.String) defaultValue(fields()[1]);
        record.filters = fieldSetFlags()[2] ? this.filters : (java.util.List<com.linkedin.pegasus2avro.metadata.query.filter.Criterion>) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
