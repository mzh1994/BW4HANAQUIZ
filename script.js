// QUESTIONS (you can replace this with JSON fetch later)
const questions = const questions = [
  {
    "id": 1,
    "text": "What are the prerequisites for deleting business partner attribute master data in SAP BW/4HANA? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "There must be no transaction data in a Datastore Object (advanced) referring to business partner values that should be deleted.",
      "B": "In SAP BW/4HANA, there must be no hierarchical data related to business partner values that should be deleted.",
      "C": "There must be no BW query as Info der in SAP BW/4HANA that uses business partner as a free characteristic.",
      "D": "In SAP BW/4HANA, there must be no analysis authorizations related to business partner values that should be deleted."
    },
    "correct": ["A", "B"]
  },
  {
    "id": 2,
    "text": "What are the main challenges companies face when they want to make data-driven decisions? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Harness the power of fragmented, unstructured data sources to turn them into valuable business insights.",
      "B": "Uncover the hidden potential in their business by unlocking seamless access to critical insights.",
      "C": "Boost confidence in the quality of their data.",
      "D": "Simplify the data landscape to reduce costs and accelerate insights.",
      "E": "Unlock a new dimension of insights, advanced analytics, and AI capabilities."
    },
    "correct": ["A", "C", "D"]
  },
  {
    "id": 3,
    "text": "You create a report with SAP Crystal Reports for Enterprise and need an analysis view as a data source. Which tool can you use to create this analysis view?",
    "options": {
      "A": "SAP BusinessObjects Web Intelligence",
      "B": "SAP Crystal Reports for Enterprise",
      "C": "SAP Lumira, designer edition",
      "D": "SAP Analysis for Microsoft Office"
    },
    "correct": "C"
  },
  {
    "id": 4,
    "text": "For which scenarios do you use the SAP HANA model focus? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Define calculations using geospatial functions",
      "B": "Load snapshots using ABAP CDS Views",
      "C": "Build views and procedures using SQL script",
      "D": "Define ABAP Managed Database Procedures in data flows"
    },
    "correct": ["A", "C"]
  },
  {
    "id": 5,
    "text": "Which of the Augmented Analytics Smart Features in SAP Analytics Cloud generates multi-tabbed stories with Overview, Key Influencers, Unexpected Values, and Simulation tabs?",
    "options": {
      "A": "Smart Discovery",
      "B": "Smart Predict",
      "C": "Search to Insight",
      "D": "Predictive Forecast"
    },
    "correct": "A"
  },
  {
    "id": 6,
    "text": "How does SAP Business Data Cloud facilitate the use of diverse data sources for AI-powered analytics?",
    "options": {
      "A": "By centralizing data from both SAP and non-SAP sources into a unified semantic layer",
      "B": "By integrating diverse data sources through custom APIs",
      "C": "By providing a secure platform for storing and managing diverse data sets",
      "D": "By transforming raw data from diverse urces into a standardized format"
    },
    "correct": "A"
  },
  {
    "id": 7,
    "text": "What does a Composite Provider allow you to do in SAP BW/4HANA? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Create new calculated fields",
      "B": "Define new restricted key figures",
      "C": "Combine Info Providers using Joins and Unions",
      "D": "Integrate SAP HANA calculation views",
      "E": "Join two ABAP CDS views"
    },
    "correct": ["A", "C", "D"]
  },
  {
    "id": 8,
    "text": "For which requirements do you suggest an SAP HANA modeling focus rather than an SAP BW/4HANA modeling focus? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Leveraging SQL in-house knowledge",
      "B": "Reporting on a harmonized set of master data",
      "C": "Loading snapshots or deltas from different sources on a periodic basis",
      "D": "Finding the best match using a fuzzy search"
    },
    "correct": ["A", "D"]
  },
  {
    "id": 9,
    "text": "Which layer of the layered scalable architecture (LSA++) of SAP BW/4HANA is designed as the main storage for harmonized consistent data?",
    "options": {
      "A": "Virtual Data Mart layer",
      "B": "Open Operational Data Store layer",
      "C": "Data Acquisition layer",
      "D": "Flexible Enterprise Data Warehouse Core layer"
    },
    "correct": "D"
  },
  {
    "id": 10,
    "text": "You want to access data from a table residing in an external database using an SAP HANA SDA remote source. Which other SAP HANA element is required to access its data?",
    "options": {
      "A": "Replication Task",
      "B": "Flowgraph",
      "C": "Table Function",
      "D": "Virtual Table"
    },
    "correct": "D"
  },
  {
    "id": 11,
    "text": "You are involved in an SAP BW/4HANA project focusing on General Ledger reporting and want to use the SAP ERP standard Data Source 0FI_GL_14 (New GL Items), which is not active in your SAP ERP system. Which transactions can be used to activate this Data Source? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Transaction RSORBCT (Data Warehousing Workbench: BI Content) in the SAP BW/4HANA system",
      "B": "RSA5 (Installation of Data Source from Business Content) in the SAP ERP system",
      "C": "Transaction RSDS (Data Source Repository) in the SAP BW/4HANA system",
      "D": "Transaction RSA2 (Data Source Repository) in the SAP ERP system"
    },
    "correct": ["A", "D"]
  },
  {
    "id": 12,
    "text": "You created a generic Data Source in SAP ERP, but did not release the Data Source for Operational Data Provisioning (ODP). What is the effect in SAP BW/4HANA?",
    "options": {
      "A": "The ODP Data Source has to be created using the ODP HANA source system type.",
      "B": "The ODP Data Source can be generated using the Dataflow generation feature.",
      "C": "The ODP Data Source cannot be replicated using the ODP_SAP source system type.",
      "D": "The ODP Data Source must be created using the ODP_SAP source system type."
    },
    "correct": "C"
  },
  {
    "id": 13,
    "text": "Which of the following are possible delta-specific fields for a generic Data Source in SAP ERP? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Calendar day",
      "B": "Time stamp Request ID",
      "C": "Numeric pointer",
      "D": "Record mode"
    },
    "correct": ["A", "B", "C"]
  },
  {
    "id": 14,
    "text": "You created an Open ODS View on an SAP HANA database table to virtually consume the data in SAP BW/4HANA. Real-time reporting requirements have now changed and you are asked to persist the data in SAP BW/4HANA. Which objects are created when using the \"Generate Data Flow\" function in the Open ODS View editor? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Data Store object (advanced)",
      "B": "SAP HANA calculation view",
      "C": "Composite Provider",
      "D": "Transformation",
      "E": "Data source"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 15,
    "text": "In a Datastore object (advanced) of type Data Mart, which request-based deletion is possible?",
    "options": {
      "A": "Only the most recent request in the active data table",
      "B": "Any not activated request in the inbound table",
      "C": "Any request in the active data table",
      "D": "Only the most recent not activated request in the inbound table"
    },
    "correct": "B"
  },
  {
    "id": 16,
    "text": "You use a measure with semantic type 'Amount with Currency Code' in your SAP HANA HDI calculation view. Which kind of currency reference can be assigned to the measure? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Another column of the same SAP HANA view",
      "B": "A variable in the same SAP HANA view",
      "C": "A column from another SAP HANA view",
      "D": "A fixed currency from table TCURC"
    },
    "correct": ["B", "C"]
  },
  {
    "id": 17,
    "text": "You want to build a web-based dashboard with interactive visualizations using scripting. Which SAP tool can you use to create this?",
    "options": {
      "A": "SAP Crystal Reports",
      "B": "SAP Smart Business Cockpits",
      "C": "SAP Analytics Cloud",
      "D": "SAP BusinessObjects Web Intelligence"
    },
    "correct": "C"
  },
  {
    "id": 18,
    "text": "Which SAP solutions can leverage the Write Interface for Datastore objects (advanced) to push data into the inbound table of Datastore objects (advanced)? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "SAP Data Services",
      "B": "SAP Datasphere",
      "C": "SAP Landscape Transformation Replication Server",
      "D": "SAP Process Integration"
    },
    "correct": ["C", "D"]
  },
  {
    "id": 19,
    "text": "Which source types are available to create a generic Data Source in SAP ERP? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "SAP query",
      "B": "ABAP managed database procedure",
      "C": "ABAP class method",
      "D": "Database view",
      "E": "ABAP function module"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 20,
    "text": "Which node type is available for both graphical modeling of SAP HANA HDI Calculation Views (XS Advanced) and SAP HANA Calculation Views (XS Classic)?",
    "options": {
      "A": "Graph",
      "B": "Rank",
      "C": "Non Equi Join",
      "D": "Minus"
    },
    "correct": "B"
  },
  {
    "id": 21,
    "text": "Which join types can you use in a Composite Provider? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Temporal hierarchy joins",
      "B": "Referential join",
      "C": "Inner join",
      "D": "Text join",
      "E": "Full Outer join"
    },
    "correct": ["B", "C", "E"]
  },
  {
    "id": 22,
    "text": "You define a remote subscription of type UPSERT in an SAP HANA Smart Data Integration (SDI) real-time update scenario. Which fields are added to the DataSource automatically? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "SDI_CHANGE_SEQUENCE",
      "B": "SDI_ENTITY_COUNTER",
      "C": "SDI_CHANGE_TIME",
      "D": "SDI_CHANGE_TYPE",
      "E": "SDI_RECORD_MODE"
    },
    "correct": ["A", "C", "D"]
  },
  {
    "id": 23,
    "text": "Which SAP BW/4HANA objects support the feature of generating an external SAP HANA View? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Semantic group object",
      "B": "Open ODS view",
      "C": "Composite Provider",
      "D": "BW query"
    },
    "correct": ["B", "D"]
  },
  {
    "id": 24,
    "text": "How does integrating Databricks within SAP Business Data Cloud reduce IT overhead for customers?",
    "options": {
      "A": "By streamlining data governance processes and minimizing the need for complex data security configurations",
      "B": "By eliminating the need for rebuilding data structures and business logic externally",
      "C": "By automating data ingestion pipelines",
      "D": "By providing pre-built connectors to various data sources"
    },
    "correct": "A"
  },
  {
    "id": 25,
    "text": "What are the possible ways to fill a pre-calculated value set (bucket)? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "By using a query (update value set by query)",
      "B": "By using a transformation and data transfer process (DTP)",
      "C": "By accessing an SAP HANA HDI Calculation View of data category Dimension",
      "D": "By entering the values manually",
      "E": "By referencing a table"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 26,
    "text": "How can the delta merge process be initiated in SAP BW/4HANA? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "By setting a specific flag in the transformation",
      "B": "By using a specific process type in a process chain",
      "C": "By setting a specific flag in the data transfer process",
      "D": "By using the SAP BW/4HANA data load monitor"
    },
    "correct": ["B", "C"]
  },
  {
    "id": 27,
    "text": "Which are the purposes of the Open Operational Data Store layer in the layered scalable architecture (LSA++) of SAP BW/4HANA? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Transformations on data based on business logic",
      "B": "Real-time reporting on source system data without staging",
      "C": "Initial staging of source system data",
      "D": "Harmonization of data from several source systems"
    },
    "correct": ["C", "D"]
  },
  {
    "id": 28,
    "text": "For a report, you would like to highlight the deviation from predefined threshold values for a key figure. Which BW query feature do you use?",
    "options": {
      "A": "Condition",
      "B": "Exception",
      "C": "Formula cell",
      "D": "Key figure property"
    },
    "correct": "B"
  },
  {
  "id": 29,
  "text": "You want to create an HDI Calculation View (data category Dimension) and integrate it into an HDI Calculation View (data category Cube with Star Join) of the same HDI container. What is the first required step you need to take?",
  "options": {
    "A": "Create a synonym for the HDI Calculation View (data category of Dimension).",
    "B": "Create a synonym for the HDI Calculation View (data category Cube with Star Join).",
    "C": "Create and build the HDI Calculation View (data category Cube with Star Join).",
    "D": "Create and build the HDI Calculation view (data category Dimension)."
  },
  "correct": ["D"]
},
  {
  "id": 30,
  "text": "Where is the button that automatically generates a process chain?",
  "options": {
    "A": "In the app called Process Chain Edi",
    "B": "In the editor of a data flow object",
    "C": "In the SAP GUI transaction for Process Chain Maintenance",
    "D": "In the editor of a data transfer process"
  },
  "correct": ["B"]
},
  {
    "id": 31,
    "text": "You have an existing field-based data flow that follows the LSA++ concept. To meet a new urgent business requirement for a field, you want to leverage a hierarchy of an existing characteristic without changing the transformation. How can you achieve this? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Assign hierarchy properties to the field in the BW Query",
      "B": "Associate the field with the characteristic in the Composite Provider",
      "C": "Add the characteristic to the Data Store object (advanced)",
      "D": "Associate the field with the characteristic in the Open ODS View"
    },
    "correct": ["A", "B"]
  },
  {
    "id": 32,
    "text": "Which recommendations should you follow to optimize BW query performance? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Dereference reusable filters",
      "B": "Include fewer drill-down characteristics in the initial view",
      "C": "Use the include mode within filter reasons",
      "D": "Create linked components",
      "E": "Use mandatory characteristic value variables"
    },
    "correct": ["B", "C", "E"]
  },
  {
    "id": 33,
    "text": "What are some of the variable types in a BW query that can use the processing type SAP HANA Exit? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Formula",
      "B": "Hierarchy node",
      "C": "Text",
      "D": "Characteristic value"
    },
    "correct": ["B", "D"]
  },
  {
    "id": 34,
    "text": "You have already loaded data from a non-SAP system into SAP Datasphere. You want to federate this data with data from an InfoCube of your SAP BW powered by SAP HANA system. What do you need to use to combine the data?",
    "options": {
      "A": "SAP ABAP Connection",
      "B": "SAP BW/4HANA Model Transfer",
      "C": "BW Shell Migration",
      "D": "BW Remote Migration"
    },
    "correct": ["A"]
  },
  {
    "id": 35,
    "text": "Which development object needs to be built to generate an HDI Container?",
    "options": {
      "A": "Space",
      "B": "Package",
      "C": "SQL Script procedure",
      "D": "HDB module"
    },
    "correct": ["D"]
  },
  {
    "id": 36,
    "text": "You defined a condition in a BW query for the top 10 of 100 customers based on sales revenue. Using key figure properties in the BW query, which two scenarios regarding result presentation can be achieved? Note: There are 2 correct answers.",
    "options": {
      "A": "One result row with the sales revenue sum of the top 10 customers",
      "B": "One result row with the sales revenue sum of all 100 customers",
      "C": "One result row with the sales revenue sum of the top 10 customers and another row with the revenue sum of all 100 customers",
      "D": "One result row with the top 10 and another row with the other 90 customers"
    },
    "correct": ["A", "B"]
  },
  {
    "id": 37,
    "text": "What are the benefits of using an InfoSource in a data flow? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Splitting a complex transformation into simple parts without storing intermediate data",
      "B": "Enabling a data transfer process (DTP) to execute multiple sequential transformations",
      "C": "Providing the delta extraction information of the source data",
      "D": "Realizing direct access to source data without storing them"
    },
    "correct": ["A", "B"]
  },
  {
    "id": 38,
    "text": "You want to build an SAP HANA HDI calculation view of data category CUBE, but you get a 'no measure defined' error. For the business requirement, a measure does not make sense. Besides changing the data category to DIMENSION, what do you need to do?",
    "options": {
      "A": "Switch from a projection node to an aggregation node",
      "B": "Switch from an aggregation node to a star join node",
      "C": "Switch from a projection node to a cube node",
      "D": "Switch from an aggregation node to a projection node"
    },
    "correct": ["D"]
  },
  {
    "id": 39,
    "text": "You notice that an SAP ERP ODP_SAP DataSource is delivering incorrect values into the first persistent data layer in SAP BW/4HANA. Which options do you have to analyze a potential extractor issue? Note: There are 2 correct answers.",
    "options": {
      "A": "Use the program RODPS_REPL_TEST in SAP ERP",
      "B": "Check entries in the table RSDDSTATEEXTRACT in SAP ERP",
      "C": "Use the transaction RSA3 (Extractor checker) in SAP ERP",
      "D": "Use the transaction ODQMON (Monitor Delta Queues) in SAP BW/4HANA"
    },
    "correct": ["A", "C"]
  },
  {
    "id": 40,
    "text": "In a BW query with cells, you need to overwrite the initial definition of a cell. Which cell types can you use? Note: There are 2 correct answers.",
    "options": {
      "A": "Formula cell",
      "B": "Selection cell",
      "C": "Help cell",
      "D": "Reference cell"
    },
    "correct": ["A", "B"]
  },
  {
    "id": 41,
    "text": "You open an SAP Analysis for Microsoft Office workbook. On which Design Panel tabs can you verify the filter values? Note: There are 2 correct answers.",
    "options": {
      "A": "Information",
      "B": "Components",
      "C": "Analysis",
      "D": "Design Rules"
    },
    "correct": ["A", "C"]
  },
  {
    "id": 42,
    "text": "Which SAP BW/4HANA objects can be used as sources of a data transfer process (DTP)? Note: There are 3 correct answers.",
    "options": {
      "A": "Composite Provider",
      "B": "Data Store Object (advanced)",
      "C": "Open Hub Destination",
      "D": "InfoSource",
      "E": "SAP HANA Analysis Process"
    },
    "correct": ["B", "C", "E"]
  },
  {
    "id": 43,
    "text": "What are some of the advantages of using SAP BW/4HANA business content? Note: There are 2 correct answers.",
    "options": {
      "A": "Accelerated SAP BW/4HANA implementation using ready-made models",
      "B": "Ability to modify business content objects to meet customer-specific requirements",
      "C": "Automatic content activation during installation",
      "D": "Automatic generation of Analysis Authorizations during activation"
    },
    "correct": ["A", "B"]
  },
  {
    "id": 44,
    "text": "Your company manufactures products with country-specific serial numbers. How do you need to model the characteristic PRODUCT to store different attribute values for serial numbers?",
    "options": {
      "A": "Use SERIAL_NO as a compounding characteristic for PRODUCT",
      "B": "Use SERIAL_NO as a transitive attribute for PRODUCT",
      "C": "Use COUNTRY as a navigation attribute for PRODUCT",
      "D": "Use COUNTRY as a compounding characteristic for PRODUCT"
    },
    "correct": ["C"]
  },
  {
    "id": 45,
    "text": "Which external hierarchy properties can be changed in the query definition? Note: There are 3 correct answers.",
    "options": {
      "A": "Position of child nodes",
      "B": "Sort direction",
      "C": "Display text nodes",
      "D": "Expand to level",
      "E": "Time dependency"
    },
    "correct": ["A", "B", "D"]
  },
  {
    "id": 46,
    "text": "You want to set up the replication process for the SAP Landscape Transformation Replication Server. Which actions can you define for a specific table? Note: There are 3 correct answers.",
    "options": {
      "A": "Convert Unicode to non-Unicode",
      "B": "Change or enrich the table structure",
      "C": "Set the reading type and portion sizes",
      "D": "Apply customizing settings to the database reduce",
      "E": "Apply mapping rules during the replication"
    },
    "correct": ["B", "C", "E"]
  },
  {
    "id": 47,
    "text": "Why should you run an SAP HANA delta merge? Note: There are 2 correct answers.",
    "options": {
      "A": "To decrease memory consumption",
      "B": "To improve the read performance",
      "C": "To combine the query cache from different executions",
      "D": "To move the most recent data from disk to memory"
    },
    "correct": ["B", "D"]
  },
  {
    "id": 48,
    "text": "When loading master data for a material, you want to see the new values before they are released for reporting. How can you make this possible? Note: There are 2 correct answers.",
    "options": {
      "A": "Define attributes of the material characteristic as Time Dependent",
      "B": "Select 'Get All New Data Request by Request' in the data transfer",
      "C": "Set 'Set manually' for Overall status of request in the DTP",
      "D": "Select Enhanced Master Data Update for the characteristic"
    },
    "correct": ["A", "D"]
  },
  {
    "id": 51,
    "text": "What are some of the prerequisites for using SAP S/4HANA ABAP CDS views for extraction into SAP BW/4HANA in an ODP context? Note: There are 2 correct answers.",
    "options": {
      "A": "The ABAP CDS views must be defined with the appropriate data extraction annotations.",
      "B": "The ABAP CDS views must be released via the program RODPS_OS_EXPOSE for BW extraction.",
      "C": "The Operational Data Provisioning Framework must be configured in SAP BW/4HANA.",
      "D": "An ODP source system with context CDS must be created in SAP BW/4HANA."
    },
    "correct": ["A", "B"]
  },
  {
    "id": 52,
    "text": "You use Info Object B as a display attribute for Info Object A. Which object properties prevent you from changing Info Object B into a navigational attribute for Info Object A? Note: There are 3 correct answers.",
    "options": {
      "A": "Conversion Routine 'ALPHA' is set in Info Object A.",
      "B": "Data Type 'Character String' is set in Info Object A.",
      "C": "Attribute Only is set in Info Object B",
      "D": "Info Object B is defined as a Key Figure.",
      "E": "High Cardinality is set in Info Object B."
    },
    "correct": ["C", "D", "E"]
  },
  {
    "id": 53,
    "text": "What foundation is necessary to use SAP S/4HANA embedded analytics?",
    "options": {
      "A": "Generated external SAP HANA Calculation Views",
      "B": "SAP Agile Data Preparation",
      "C": "SAP HANA optimized business content",
      "D": "ABAP CDS view based virtual data model"
    },
    "correct": ["D"]
  },
  {
    "id": 54,
    "text": "What is the maximum number of reference characteristics that can be used for one key figure with a multi-dimensional exception aggregation in a BW query?",
    "options": {
      "A": "07",
      "B": "10",
      "C": "05",
      "D": "03"
    },
    "correct": ["C"]
  },
  {
    "id": 55,
    "text": "Which data deletion options are offered for a Standard Datastore Object (advanced)? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Selective deletion of data",
      "B": "Request-based data deletion",
      "C": "Deletion of data from all tables",
      "D": "Selective deletion including data of subsequent targets",
      "E": "Deletion of all data from active table only"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 56,
    "text": "What should you consider when you set the High Cardinality flag for a characteristic? Note: There are 2 correct answers.",
    "options": {
      "A": "You cannot use this characteristic as an external characteristic in hierarchies.",
      "B": "You cannot use navigation attributes for this characteristic.",
      "C": "You cannot use this characteristic as a navigation attribute for another characteristic.",
      "D": "You cannot load more than 2 billion data records for this characteristic."
    },
    "correct": ["B", "C"]
  },
  {
    "id": 57,
    "text": "Which objects in SAP BW/4HANA allow you to use both fields and Info Objects in their definition? Note: There are 3 correct answers.",
    "options": {
      "A": "BADI Provider",
      "B": "Datastore Object (advanced)",
      "C": "Composite Provider",
      "D": "Open ODS View",
      "E": "Info Object Type Key Figure"
    },
    "correct": ["B", "C", "D"]
  },
  {
    "id": 58,
    "text": "For Info Object ADDRESS, the High Cardinality flag has been set. However, ADDRESS has an attribute CITY without the High Cardinality flag. What is the effect of SID values on this scenario?",
    "options": {
      "A": "SID values are generated when Info Object ADDRESS is activated.",
      "B": "SID values are generated when data for Info Object ADDRESS is loaded.",
      "C": "SID values are generated when Info Object CITY is activated.",
      "D": "SID values are not stored for Info Object ADDRESS"
    },
    "correct": ["D"]
  },
  {
    "id": 59,
    "text": "You are allowed to run a BW query, but the data selection is only partially covered by your authorizations. What happens related to the BW query in this scenario?",
    "options": {
      "A": "The BW query starts and shows an error message.",
      "B": "The BW query does not start running.",
      "C": "The BW query starts, and the unauthorized values are 0.",
      "D": "The BW query starts and only the raised data is displayed."
    },
    "correct": ["D"]
  },
  {
    "id": 60,
    "text": "Which solution enables advanced AI and machine learning models on combined SAP and third-party data?",
    "options": {
      "A": "SAP Analytics Cloud",
      "B": "SAP AI Launchpad",
      "C": "SAP Databricks",
      "D": "SAP Datasphere"
    },
    "correct": ["C"]
  },
  {
    "id": 61,
    "text": "In which ODP context is the operational delta queue (ODQ) managed by the target system?",
    "options": {
      "A": "ODP HANA",
      "B": "ODP CDS",
      "C": "ODP_BW",
      "D": "DP SAP"
    },
    "correct": ["A"]
  },
  {
    "id": 62,
    "text": "Which objects' values can be affected by the key date in a BW query? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Hierarchies",
      "B": "Basic key figures",
      "C": "Navigation attributes",
      "D": "Time characteristics",
      "E": "Display attributes"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 63,
    "text": "Why is the start process a special type of process in a process chain? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "It can be left out when the Procession is embedded in a meta chain.",
      "B": "Only one start process is allowed for each process chain.",
      "C": "It can be a successor to another process.",
      "D": "It is the only process that can be scheduled without a predecessor."
    },
    "correct": ["B", "D"]
  },
  {
    "id": 64,
    "text": "The Database Explorer in the Web IDE for SAP HANA provides a data file import wizard to create a table in SAP HANA from a flat file. What are possible actions after the system suggests the target structure? Note: There are 3 correct answers.",
    "options": {
      "A": "Define sorting properties for a target table field.",
      "B": "Change the order of the fields in the target table.",
      "C": "Remove leading zeroes for a target table field.",
      "D": "Adjust the suggested data type of the target table fields.",
      "E": "Switch the table type between row store and column store."
    },
    "correct": ["B", "D", "E"]
  },
  {
    "id": 65,
    "text": "Why do you set Read Access Type to 'SAP HANA View' in a BW Info Object?",
    "options": {
      "A": "To report master data attributes which are defined in calculation views",
      "B": "To use the Info Object as an association within an Open ODS view",
      "C": "To enable parallel loading of master data texts",
      "D": "To generate an SAP HANA calculation view, data category Dimension"
    },
    "correct": ["A"]
  },
  {
    "id": 66,
    "text": "In an SAP HANA smart data integration flowgraph, which transformation options are available? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Split datasets",
      "B": "Run an SAP HANA analysis process",
      "C": "Call an ABAP function module",
      "D": "Include a stored procedure",
      "E": "Combine datasets"
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 67,
    "text": "How does SAP position SAP Datasphere in supporting business users? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Business users can upload their own CSV files.",
      "B": "Business users can create agile models from different sources.",
      "C": "Business users can leverage embedded analytic Fiori apps for data analysis.",
      "D": "Business users can allocate system resources without IT involvement.",
      "E": "Business users can create restricted and calculated columns based on existing models."
    },
    "correct": ["A", "B", "E"]
  },
  {
    "id": 68,
    "text": "You created an Open ODS view of type Facts. With which object types can you associate a field in the characteristics folder? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Info Object of type Characteristic",
      "B": "HDI Calculation View of data category Dimension",
      "C": "Open ODS view of type Master D",
      "D": "Open ODS view of type Facts"
    },
    "correct": ["A", "D"]
  },
  {
    "id": 69,
    "text": "Which features does SAP Analysis for Microsoft Office provide? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Including more than one data source",
      "B": "Creating bookmarks for a navigation state",
      "C": "Displaying data simultaneously in a table and a chart",
      "D": "Dragging measures in and out of the repo",
      "E": "Changing context menu entries"
    },
    "correct": ["A", "B", "C"]
  },
  {
    "id": 70,
    "text": "In SAP Web IDE for SAP HANA, you have imported a project including an HDB module with calculation views. What do you need to do in the project settings before you can successfully build the HDB module?",
    "options": {
      "A": "Generate the HDI container",
      "B": "Define a package",
      "C": "Assign a space",
      "D": "Change the schema name"
    },
    "correct": ["C"]
  },
  {
    "id": 71,
    "text": "For which use case would you need to model a transitive attribute?",
    "options": {
      "A": "Load attributes using the enhanced master data update",
      "B": "Report on navigational attributes factional attributes",
      "C": "Store time-dependent snapshots of master data attributes",
      "D": "Generate a transient provider for a BW query on master data attributes"
    },
    "correct": ["A"]
  },
  {
    "id": 72,
    "text": "You create an SAP HANA HDI Calculation View. What are some of the reasons to choose the data category Cube with Star Join instead of data category Dimension? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "You can aggregate measures as a sum.",
      "B": "You can provide default time characteristics.",
      "C": "You can create restricted columns.",
      "D": "You can persist with transactional data.",
      "E": "You can combine master data and transactional data."
    },
    "correct": ["A", "D", "E"]
  },
  {
    "id": 73,
    "text": "Which tasks are part of the Business Blueprint phase in an SAP BW/4HANA project? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Associate an Info Object to a field in an ODS view",
      "B": "Collect central and individual information requirements",
      "C": "Activate SAP business content objects that comply with the LSA++ architecture",
      "D": "Analyze key performance indicators of the business processes"
    },
    "correct": ["B", "D"]
  },
  {
    "id": 74,
    "text": "You need to derive an architecture overview model from a key figure matrix. Which is the first step you need to take?",
    "options": {
      "A": "Identify sources",
      "B": "Analyze storage requirements",
      "C": "Identify transformations",
      "D": "Define data marts"
    },
    "correct": ["A"]
  },
  {
    "id": 75,
    "text": "What are benefits of using an Info Source in a data flow? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Providing the delta extraction information of the source data",
      "B": "Enabling a data transfer process (DTP) to execute multiple sequential transformation",
      "C": "Realizing direct access to source data without storing them",
      "D": "Splitting a complex transformation into simple parts without storing intermediate data"
    },
    "correct": ["B", "D"]
  },
  {
    "id": 76,
    "text": "You want to create a restricted column in an SAP HANA HDI calculation view. What do you need to define? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "An SAP HANA data type",
      "B": "An aggregation method",
      "C": "A condition criterion",
      "D": "A reference to an existing measure"
    },
    "correct": ["C", "D"]
  },
  {
    "id": 77,
    "text": "What are benefits of separating master data from transactional data in SAP BW/4HANA? Note: There are 3 correct answers to this question.",
    "options": {
      "A": "Allowing different data load frequency",
      "B": "Ensuring referential integrity on your sectional data",
      "C": "Avoiding generation of SID values",
      "D": "Reducing the number of database tables",
      "E": "Providing language-dependent master data texts"
    },
    "correct": ["A", "B", "E"]
  },
  {
    "id": 78,
    "text": "With SAP BW/4HANA, the new HANA-optimized business content is designed according to the LSA++ framework. Which technical namespace is assigned to identify the new SAP ERP-related business content?",
    "options": {
      "A": "/SFA/",
      "B": "/IMO/",
      "C": "/CPMB/",
      "D": "/BW4/"
    },
    "correct": ["B"]
  },
  {
    "id": 79,
    "text": "What is the request handling default setting for error handling in a data transfer process (DTP) in SAP BW/4HANA?",
    "options": {
      "A": "Request is set to fail, error stack is written, and valid records are updated.",
      "B": "Request is canceled, records are noted, and target is not updated.",
      "C": "Request is canceled, first incorrect record is tracked, and target is not updated.",
      "D": "Request is set to success, error stack is written, and valid records are updated."
    },
    "correct": ["B"]
  },
  {
    "id": 80,
    "text": "What are the reasons for implementing Composite Providers? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "To persist combined data for reporting",
      "B": "To provide a virtual data mart layer that combines existing BW models",
      "C": "To provide an interface for BW queries",
      "D": "To directly expose an SAP HANA table via an external schema"
    },
    "correct": ["B", "C"]
  },
  {
    "id": 81,
    "text": "Which features of an SAP BW/4HANA Info Object are intended to reduce physical data storage space? Note: There are 2 correct answers to this question.",
    "options": {
      "A": "Reference characteristic",
      "B": "Enhanced master data update",
      "C": "Compounding characteristic",
      "D": "Transitive attribute"
    },
    "correct": ["A", "D"]
  }
];


// STATE
let mode = null;
let currentIndex = 0;
let userAnswers = {};

function getCorrectArray(q) {
  return Array.isArray(q.correct) ? q.correct : [q.correct];
}

function startQuiz(m) {
  mode = m;
  currentIndex = 0;
  userAnswers = {};
  document.getElementById("mode-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("finish-btn").classList.toggle("hidden", mode !== "exam");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  const correctArr = getCorrectArray(q);
  const isMulti = correctArr.length > 1;

  document.getElementById("mode-label").textContent =
    mode === "practice" ? "Practice Mode" : "Exam Mode";

  document.getElementById("question-counter").textContent =
    `Question ${currentIndex + 1} of ${questions.length}`;

  document.getElementById("question-text").textContent = q.text;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  const saved = userAnswers[q.id] || [];

  Object.entries(q.options).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "sap-option-row";

    // SAP radio for single, SAP checkbox for multi
    const input = document.createElement("input");
    input.type = isMulti ? "checkbox" : "radio";
    input.name = `q_${q.id}`;
    input.value = key;

    if (saved.includes(key)) input.checked = true;

    input.onclick = (e) => {
      e.stopPropagation();
      selectOption(q, key);
    };

    row.onclick = () => selectOption(q, key);

    row.appendChild(input);
    row.appendChild(document.createTextNode(`${key}. ${value}`));

    container.appendChild(row);
  });

  updateNavLock(q);
}

function selectOption(q, key) {
  const correctArr = getCorrectArray(q);
  const isMulti = correctArr.length > 1;
  const required = correctArr.length;

  let selected = userAnswers[q.id] || [];

  if (isMulti) {
    // toggle checkbox unless exceeding required number
    if (selected.includes(key)) {
      selected = selected.filter(x => x !== key);
    } else {
      if (selected.length >= required) {
        alert(`You must select exactly ${required} answer(s).`);
        return;
      }
      selected.push(key);
    }
  } else {
    selected = [key]; // radio
  }

  userAnswers[q.id] = selected;
  renderQuestion();
}

function updateNavLock(q) {
  const correctArr = getCorrectArray(q);
  const required = correctArr.length;
  const selected = userAnswers[q.id] || [];

  const lock = required > 1 && selected.length !== required;

  document.getElementById("prev-btn").disabled = currentIndex === 0;
  document.getElementById("next-btn").disabled =
    currentIndex === questions.length - 1 || lock;

  if (mode === "exam") {
    document.getElementById("finish-btn").disabled = lock;
  }
}

function nextQuestion() {
  currentIndex++;
  renderQuestion();
}

function prevQuestion() {
  currentIndex--;
  renderQuestion();
}

function finishExam() {
  finished = true;

  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let correctCount = 0;

  // Build 1990s Excel-style table
  let reportText = "";
  reportText += "+----+----------------------+----------------------+--------+\n";
  reportText += "| Q# | Your Answers         | Correct Answers      | Result |\n";
  reportText += "+----+----------------------+----------------------+--------+\n";

  questions.forEach((q, index) => {
    const selected = userAnswers[q.id] || [];
    const correctArr = getCorrectArray(q);

    const isCorrect =
      selected.length === correctArr.length &&
      selected.every(a => correctArr.includes(a));

    if (isCorrect) correctCount++;

    const yourAns = (selected.join(" ") || "").padEnd(20);
    const correctAns = correctArr.join(" ").padEnd(20);
    const status = isCorrect ? "PASS " : "FAIL ";

    reportText += `| ${String(index + 1).padStart(2)} | ${yourAns} | ${correctAns} | ${status}|\n`;
  });

  const total = questions.length;
  const percent = Math.round((correctCount / total) * 100);

  reportText += "+----+----------------------+----------------------+--------+\n";
  reportText += `TOTAL SCORE: ${correctCount} / ${total}  (${percent}%)\n`;

  // Display the table
  const reportContainer = document.getElementById("detailed-report");
  reportContainer.innerHTML = `<pre style="font-family: 'Courier New', monospace; font-size: 14px;">${reportText}</pre>`;

  document.getElementById("score-summary").textContent =
    `Score: ${correctCount}/${total} (${percent}%)`;
}



function restart() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("mode-screen").classList.remove("hidden");
}




