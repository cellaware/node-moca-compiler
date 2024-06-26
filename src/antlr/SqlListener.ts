// Generated from C://dev//node-moca-parser//src//antlr//Sql.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { Sql_scriptContext } from "./SqlParser";
import { BatchContext } from "./SqlParser";
import { Sql_clausesContext } from "./SqlParser";
import { Sql_clauseContext } from "./SqlParser";
import { Dml_clauseContext } from "./SqlParser";
import { Ddl_clauseContext } from "./SqlParser";
import { Drop_sequenceContext } from "./SqlParser";
import { Alter_sequenceContext } from "./SqlParser";
import { Create_sequenceContext } from "./SqlParser";
import { Delete_statementContext } from "./SqlParser";
import { Delete_statement_fromContext } from "./SqlParser";
import { Insert_statementContext } from "./SqlParser";
import { Insert_statement_valueContext } from "./SqlParser";
import { Select_statementContext } from "./SqlParser";
import { Update_statementContext } from "./SqlParser";
import { Output_clauseContext } from "./SqlParser";
import { Output_dml_list_elemContext } from "./SqlParser";
import { Output_column_nameContext } from "./SqlParser";
import { Create_indexContext } from "./SqlParser";
import { Create_tableContext } from "./SqlParser";
import { Table_optionsContext } from "./SqlParser";
import { Create_viewContext } from "./SqlParser";
import { View_attributeContext } from "./SqlParser";
import { Alter_tableContext } from "./SqlParser";
import { HostContext } from "./SqlParser";
import { Drop_indexContext } from "./SqlParser";
import { Drop_relational_or_xml_or_spatial_indexContext } from "./SqlParser";
import { Drop_backward_compatible_indexContext } from "./SqlParser";
import { Drop_tableContext } from "./SqlParser";
import { Drop_viewContext } from "./SqlParser";
import { Rowset_function_limitedContext } from "./SqlParser";
import { OpenqueryContext } from "./SqlParser";
import { OpendatasourceContext } from "./SqlParser";
import { Execute_statementContext } from "./SqlParser";
import { Execute_bodyContext } from "./SqlParser";
import { Execute_statement_argContext } from "./SqlParser";
import { Execute_var_stringContext } from "./SqlParser";
import { Column_def_table_constraintsContext } from "./SqlParser";
import { Column_def_table_constraintContext } from "./SqlParser";
import { Column_definitionContext } from "./SqlParser";
import { Materialized_column_definitionContext } from "./SqlParser";
import { Column_constraintContext } from "./SqlParser";
import { Table_constraintContext } from "./SqlParser";
import { On_deleteContext } from "./SqlParser";
import { On_updateContext } from "./SqlParser";
import { Index_optionsContext } from "./SqlParser";
import { Index_optionContext } from "./SqlParser";
import { Constant_LOCAL_IDContext } from "./SqlParser";
import { ExpressionContext } from "./SqlParser";
import { Moca_at_variableContext } from "./SqlParser";
import { Moca_environment_variableContext } from "./SqlParser";
import { Moca_at_minus_variableContext } from "./SqlParser";
import { Moca_at_plus_variableContext } from "./SqlParser";
import { Moca_at_starContext } from "./SqlParser";
import { Moca_integration_variableContext } from "./SqlParser";
import { Primitive_expressionContext } from "./SqlParser";
import { Case_expressionContext } from "./SqlParser";
import { Unary_operator_expressionContext } from "./SqlParser";
import { Bracket_expressionContext } from "./SqlParser";
import { Constant_expressionContext } from "./SqlParser";
import { SubqueryContext } from "./SqlParser";
import { With_expressionContext } from "./SqlParser";
import { Common_table_expressionContext } from "./SqlParser";
import { Update_elemContext } from "./SqlParser";
import { Search_condition_listContext } from "./SqlParser";
import { Search_conditionContext } from "./SqlParser";
import { Search_condition_andContext } from "./SqlParser";
import { Search_condition_notContext } from "./SqlParser";
import { PredicateContext } from "./SqlParser";
import { Query_expressionContext } from "./SqlParser";
import { Sql_unionContext } from "./SqlParser";
import { Query_specificationContext } from "./SqlParser";
import { Top_clauseContext } from "./SqlParser";
import { Top_percentContext } from "./SqlParser";
import { Top_countContext } from "./SqlParser";
import { Order_by_clauseContext } from "./SqlParser";
import { For_clauseContext } from "./SqlParser";
import { Xml_common_directivesContext } from "./SqlParser";
import { Order_by_expressionContext } from "./SqlParser";
import { Group_by_itemContext } from "./SqlParser";
import { Option_clauseContext } from "./SqlParser";
import { OptionContext } from "./SqlParser";
import { Optimize_for_argContext } from "./SqlParser";
import { Select_listContext } from "./SqlParser";
import { Udt_method_argumentsContext } from "./SqlParser";
import { AsteriskContext } from "./SqlParser";
import { Column_elemContext } from "./SqlParser";
import { Udt_elemContext } from "./SqlParser";
import { Expression_elemContext } from "./SqlParser";
import { Select_list_elemContext } from "./SqlParser";
import { Table_sourcesContext } from "./SqlParser";
import { Table_sourceContext } from "./SqlParser";
import { Table_source_item_joinedContext } from "./SqlParser";
import { Table_source_itemContext } from "./SqlParser";
import { Open_xmlContext } from "./SqlParser";
import { Schema_declarationContext } from "./SqlParser";
import { Column_declarationContext } from "./SqlParser";
import { Change_tableContext } from "./SqlParser";
import { Join_partContext } from "./SqlParser";
import { Pivot_clauseContext } from "./SqlParser";
import { Unpivot_clauseContext } from "./SqlParser";
import { Full_column_name_listContext } from "./SqlParser";
import { Table_name_with_hintContext } from "./SqlParser";
import { Rowset_functionContext } from "./SqlParser";
import { Bulk_optionContext } from "./SqlParser";
import { Derived_tableContext } from "./SqlParser";
import { BINARY_CHECKSUMContext } from "./SqlParser";
import { CASTContext } from "./SqlParser";
import { CONVERTContext } from "./SqlParser";
import { CHECKSUMContext } from "./SqlParser";
import { COALESCEContext } from "./SqlParser";
import { CURRENT_TIMESTAMPContext } from "./SqlParser";
import { CURRENT_USERContext } from "./SqlParser";
import { DATEADDContext } from "./SqlParser";
import { DATEDIFFContext } from "./SqlParser";
import { DATENAMEContext } from "./SqlParser";
import { DATEPARTContext } from "./SqlParser";
import { GETDATEContext } from "./SqlParser";
import { GETUTCDATEContext } from "./SqlParser";
import { IDENTITYContext } from "./SqlParser";
import { MIN_ACTIVE_ROWVERSIONContext } from "./SqlParser";
import { NULLIFContext } from "./SqlParser";
import { STUFFContext } from "./SqlParser";
import { SESSION_USERContext } from "./SqlParser";
import { SYSTEM_USERContext } from "./SqlParser";
import { ISNULLContext } from "./SqlParser";
import { XML_DATA_TYPE_FUNCContext } from "./SqlParser";
import { IFFContext } from "./SqlParser";
import { RANKING_WINDOWED_FUNCContext } from "./SqlParser";
import { AGGREGATE_WINDOWED_FUNCContext } from "./SqlParser";
import { ANALYTIC_WINDOWED_FUNCContext } from "./SqlParser";
import { SCALAR_FUNCTIONContext } from "./SqlParser";
import { STRINGAGGContext } from "./SqlParser";
import { Xml_data_type_methodsContext } from "./SqlParser";
import { Value_methodContext } from "./SqlParser";
import { Query_methodContext } from "./SqlParser";
import { Exist_methodContext } from "./SqlParser";
import { Modify_methodContext } from "./SqlParser";
import { Nodes_methodContext } from "./SqlParser";
import { Switch_sectionContext } from "./SqlParser";
import { Switch_search_condition_sectionContext } from "./SqlParser";
import { As_column_aliasContext } from "./SqlParser";
import { As_table_aliasContext } from "./SqlParser";
import { Table_aliasContext } from "./SqlParser";
import { With_table_hintsContext } from "./SqlParser";
import { Insert_with_table_hintsContext } from "./SqlParser";
import { Table_hintContext } from "./SqlParser";
import { Index_valueContext } from "./SqlParser";
import { Column_alias_listContext } from "./SqlParser";
import { Column_aliasContext } from "./SqlParser";
import { Table_value_constructorContext } from "./SqlParser";
import { Expression_listContext } from "./SqlParser";
import { Ranking_windowed_functionContext } from "./SqlParser";
import { Aggregate_windowed_functionContext } from "./SqlParser";
import { Analytic_windowed_functionContext } from "./SqlParser";
import { All_distinct_expressionContext } from "./SqlParser";
import { Over_clauseContext } from "./SqlParser";
import { Row_or_range_clauseContext } from "./SqlParser";
import { Window_frame_extentContext } from "./SqlParser";
import { Window_frame_boundContext } from "./SqlParser";
import { Window_frame_precedingContext } from "./SqlParser";
import { Window_frame_followingContext } from "./SqlParser";
import { Full_table_nameContext } from "./SqlParser";
import { Table_nameContext } from "./SqlParser";
import { Simple_nameContext } from "./SqlParser";
import { Func_proc_name_schemaContext } from "./SqlParser";
import { Func_proc_name_database_schemaContext } from "./SqlParser";
import { Func_proc_name_server_database_schemaContext } from "./SqlParser";
import { Ddl_objectContext } from "./SqlParser";
import { Full_column_nameContext } from "./SqlParser";
import { Column_name_list_with_orderContext } from "./SqlParser";
import { Column_name_listContext } from "./SqlParser";
import { Cursor_nameContext } from "./SqlParser";
import { On_offContext } from "./SqlParser";
import { ClusteredContext } from "./SqlParser";
import { Null_notnullContext } from "./SqlParser";
import { Null_or_defaultContext } from "./SqlParser";
import { Scalar_function_nameContext } from "./SqlParser";
import { Data_typeContext } from "./SqlParser";
import { ConstantContext } from "./SqlParser";
import { SignContext } from "./SqlParser";
import { IdContext } from "./SqlParser";
import { Simple_idContext } from "./SqlParser";
import { Comparison_operatorContext } from "./SqlParser";
import { Assignment_operatorContext } from "./SqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SqlParser`.
 */
export default class SqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SqlParser.sql_script`.
	 * @param ctx the parse tree
	 */
	enterSql_script?: (ctx: Sql_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sql_script`.
	 * @param ctx the parse tree
	 */
	exitSql_script?: (ctx: Sql_scriptContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.batch`.
	 * @param ctx the parse tree
	 */
	enterBatch?: (ctx: BatchContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.batch`.
	 * @param ctx the parse tree
	 */
	exitBatch?: (ctx: BatchContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 */
	enterSql_clauses?: (ctx: Sql_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 */
	exitSql_clauses?: (ctx: Sql_clausesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.sql_clause`.
	 * @param ctx the parse tree
	 */
	enterSql_clause?: (ctx: Sql_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sql_clause`.
	 * @param ctx the parse tree
	 */
	exitSql_clause?: (ctx: Sql_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.dml_clause`.
	 * @param ctx the parse tree
	 */
	enterDml_clause?: (ctx: Dml_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.dml_clause`.
	 * @param ctx the parse tree
	 */
	exitDml_clause?: (ctx: Dml_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ddl_clause`.
	 * @param ctx the parse tree
	 */
	enterDdl_clause?: (ctx: Ddl_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ddl_clause`.
	 * @param ctx the parse tree
	 */
	exitDdl_clause?: (ctx: Ddl_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 */
	enterDrop_sequence?: (ctx: Drop_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 */
	exitDrop_sequence?: (ctx: Drop_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 */
	enterAlter_sequence?: (ctx: Alter_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 */
	exitAlter_sequence?: (ctx: Alter_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.create_sequence`.
	 * @param ctx the parse tree
	 */
	enterCreate_sequence?: (ctx: Create_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.create_sequence`.
	 * @param ctx the parse tree
	 */
	exitCreate_sequence?: (ctx: Create_sequenceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.delete_statement_from`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement_from?: (ctx: Delete_statement_fromContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.delete_statement_from`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement_from?: (ctx: Delete_statement_fromContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.insert_statement`.
	 * @param ctx the parse tree
	 */
	enterInsert_statement?: (ctx: Insert_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.insert_statement`.
	 * @param ctx the parse tree
	 */
	exitInsert_statement?: (ctx: Insert_statementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.insert_statement_value`.
	 * @param ctx the parse tree
	 */
	enterInsert_statement_value?: (ctx: Insert_statement_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.insert_statement_value`.
	 * @param ctx the parse tree
	 */
	exitInsert_statement_value?: (ctx: Insert_statement_valueContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.output_clause`.
	 * @param ctx the parse tree
	 */
	enterOutput_clause?: (ctx: Output_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.output_clause`.
	 * @param ctx the parse tree
	 */
	exitOutput_clause?: (ctx: Output_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.output_dml_list_elem`.
	 * @param ctx the parse tree
	 */
	enterOutput_dml_list_elem?: (ctx: Output_dml_list_elemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.output_dml_list_elem`.
	 * @param ctx the parse tree
	 */
	exitOutput_dml_list_elem?: (ctx: Output_dml_list_elemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.output_column_name`.
	 * @param ctx the parse tree
	 */
	enterOutput_column_name?: (ctx: Output_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.output_column_name`.
	 * @param ctx the parse tree
	 */
	exitOutput_column_name?: (ctx: Output_column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.create_index`.
	 * @param ctx the parse tree
	 */
	enterCreate_index?: (ctx: Create_indexContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.create_index`.
	 * @param ctx the parse tree
	 */
	exitCreate_index?: (ctx: Create_indexContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.create_table`.
	 * @param ctx the parse tree
	 */
	enterCreate_table?: (ctx: Create_tableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.create_table`.
	 * @param ctx the parse tree
	 */
	exitCreate_table?: (ctx: Create_tableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_options`.
	 * @param ctx the parse tree
	 */
	enterTable_options?: (ctx: Table_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_options`.
	 * @param ctx the parse tree
	 */
	exitTable_options?: (ctx: Table_optionsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.create_view`.
	 * @param ctx the parse tree
	 */
	enterCreate_view?: (ctx: Create_viewContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.create_view`.
	 * @param ctx the parse tree
	 */
	exitCreate_view?: (ctx: Create_viewContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.view_attribute`.
	 * @param ctx the parse tree
	 */
	enterView_attribute?: (ctx: View_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.view_attribute`.
	 * @param ctx the parse tree
	 */
	exitView_attribute?: (ctx: View_attributeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.alter_table`.
	 * @param ctx the parse tree
	 */
	enterAlter_table?: (ctx: Alter_tableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.alter_table`.
	 * @param ctx the parse tree
	 */
	exitAlter_table?: (ctx: Alter_tableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.drop_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_index?: (ctx: Drop_indexContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.drop_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_index?: (ctx: Drop_indexContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.drop_relational_or_xml_or_spatial_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_relational_or_xml_or_spatial_index?: (ctx: Drop_relational_or_xml_or_spatial_indexContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.drop_relational_or_xml_or_spatial_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_relational_or_xml_or_spatial_index?: (ctx: Drop_relational_or_xml_or_spatial_indexContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.drop_backward_compatible_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_backward_compatible_index?: (ctx: Drop_backward_compatible_indexContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.drop_backward_compatible_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_backward_compatible_index?: (ctx: Drop_backward_compatible_indexContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.drop_table`.
	 * @param ctx the parse tree
	 */
	enterDrop_table?: (ctx: Drop_tableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.drop_table`.
	 * @param ctx the parse tree
	 */
	exitDrop_table?: (ctx: Drop_tableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.drop_view`.
	 * @param ctx the parse tree
	 */
	enterDrop_view?: (ctx: Drop_viewContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.drop_view`.
	 * @param ctx the parse tree
	 */
	exitDrop_view?: (ctx: Drop_viewContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.rowset_function_limited`.
	 * @param ctx the parse tree
	 */
	enterRowset_function_limited?: (ctx: Rowset_function_limitedContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.rowset_function_limited`.
	 * @param ctx the parse tree
	 */
	exitRowset_function_limited?: (ctx: Rowset_function_limitedContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.openquery`.
	 * @param ctx the parse tree
	 */
	enterOpenquery?: (ctx: OpenqueryContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.openquery`.
	 * @param ctx the parse tree
	 */
	exitOpenquery?: (ctx: OpenqueryContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.opendatasource`.
	 * @param ctx the parse tree
	 */
	enterOpendatasource?: (ctx: OpendatasourceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.opendatasource`.
	 * @param ctx the parse tree
	 */
	exitOpendatasource?: (ctx: OpendatasourceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.execute_statement`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement?: (ctx: Execute_statementContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.execute_statement`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement?: (ctx: Execute_statementContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.execute_body`.
	 * @param ctx the parse tree
	 */
	enterExecute_body?: (ctx: Execute_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.execute_body`.
	 * @param ctx the parse tree
	 */
	exitExecute_body?: (ctx: Execute_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.execute_statement_arg`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement_arg?: (ctx: Execute_statement_argContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.execute_statement_arg`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement_arg?: (ctx: Execute_statement_argContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.execute_var_string`.
	 * @param ctx the parse tree
	 */
	enterExecute_var_string?: (ctx: Execute_var_stringContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.execute_var_string`.
	 * @param ctx the parse tree
	 */
	exitExecute_var_string?: (ctx: Execute_var_stringContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_def_table_constraints`.
	 * @param ctx the parse tree
	 */
	enterColumn_def_table_constraints?: (ctx: Column_def_table_constraintsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_def_table_constraints`.
	 * @param ctx the parse tree
	 */
	exitColumn_def_table_constraints?: (ctx: Column_def_table_constraintsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_def_table_constraint`.
	 * @param ctx the parse tree
	 */
	enterColumn_def_table_constraint?: (ctx: Column_def_table_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_def_table_constraint`.
	 * @param ctx the parse tree
	 */
	exitColumn_def_table_constraint?: (ctx: Column_def_table_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_definition`.
	 * @param ctx the parse tree
	 */
	enterColumn_definition?: (ctx: Column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_definition`.
	 * @param ctx the parse tree
	 */
	exitColumn_definition?: (ctx: Column_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.materialized_column_definition`.
	 * @param ctx the parse tree
	 */
	enterMaterialized_column_definition?: (ctx: Materialized_column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.materialized_column_definition`.
	 * @param ctx the parse tree
	 */
	exitMaterialized_column_definition?: (ctx: Materialized_column_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_constraint`.
	 * @param ctx the parse tree
	 */
	enterColumn_constraint?: (ctx: Column_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_constraint`.
	 * @param ctx the parse tree
	 */
	exitColumn_constraint?: (ctx: Column_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	enterTable_constraint?: (ctx: Table_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	exitTable_constraint?: (ctx: Table_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.on_delete`.
	 * @param ctx the parse tree
	 */
	enterOn_delete?: (ctx: On_deleteContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.on_delete`.
	 * @param ctx the parse tree
	 */
	exitOn_delete?: (ctx: On_deleteContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.on_update`.
	 * @param ctx the parse tree
	 */
	enterOn_update?: (ctx: On_updateContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.on_update`.
	 * @param ctx the parse tree
	 */
	exitOn_update?: (ctx: On_updateContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.index_options`.
	 * @param ctx the parse tree
	 */
	enterIndex_options?: (ctx: Index_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.index_options`.
	 * @param ctx the parse tree
	 */
	exitIndex_options?: (ctx: Index_optionsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.index_option`.
	 * @param ctx the parse tree
	 */
	enterIndex_option?: (ctx: Index_optionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.index_option`.
	 * @param ctx the parse tree
	 */
	exitIndex_option?: (ctx: Index_optionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 */
	enterConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 */
	exitConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.moca_at_variable`.
	 * @param ctx the parse tree
	 */
	enterMoca_at_variable?: (ctx: Moca_at_variableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.moca_at_variable`.
	 * @param ctx the parse tree
	 */
	exitMoca_at_variable?: (ctx: Moca_at_variableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.moca_environment_variable`.
	 * @param ctx the parse tree
	 */
	enterMoca_environment_variable?: (ctx: Moca_environment_variableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.moca_environment_variable`.
	 * @param ctx the parse tree
	 */
	exitMoca_environment_variable?: (ctx: Moca_environment_variableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.moca_at_minus_variable`.
	 * @param ctx the parse tree
	 */
	enterMoca_at_minus_variable?: (ctx: Moca_at_minus_variableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.moca_at_minus_variable`.
	 * @param ctx the parse tree
	 */
	exitMoca_at_minus_variable?: (ctx: Moca_at_minus_variableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.moca_at_plus_variable`.
	 * @param ctx the parse tree
	 */
	enterMoca_at_plus_variable?: (ctx: Moca_at_plus_variableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.moca_at_plus_variable`.
	 * @param ctx the parse tree
	 */
	exitMoca_at_plus_variable?: (ctx: Moca_at_plus_variableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.moca_at_star`.
	 * @param ctx the parse tree
	 */
	enterMoca_at_star?: (ctx: Moca_at_starContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.moca_at_star`.
	 * @param ctx the parse tree
	 */
	exitMoca_at_star?: (ctx: Moca_at_starContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.moca_integration_variable`.
	 * @param ctx the parse tree
	 */
	enterMoca_integration_variable?: (ctx: Moca_integration_variableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.moca_integration_variable`.
	 * @param ctx the parse tree
	 */
	exitMoca_integration_variable?: (ctx: Moca_integration_variableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimitive_expression?: (ctx: Primitive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimitive_expression?: (ctx: Primitive_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	enterBracket_expression?: (ctx: Bracket_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	exitBracket_expression?: (ctx: Bracket_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.with_expression`.
	 * @param ctx the parse tree
	 */
	enterWith_expression?: (ctx: With_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.with_expression`.
	 * @param ctx the parse tree
	 */
	exitWith_expression?: (ctx: With_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	enterCommon_table_expression?: (ctx: Common_table_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	exitCommon_table_expression?: (ctx: Common_table_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.update_elem`.
	 * @param ctx the parse tree
	 */
	enterUpdate_elem?: (ctx: Update_elemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.update_elem`.
	 * @param ctx the parse tree
	 */
	exitUpdate_elem?: (ctx: Update_elemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.search_condition_list`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition_list?: (ctx: Search_condition_listContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.search_condition_list`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition_list?: (ctx: Search_condition_listContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.search_condition`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition?: (ctx: Search_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.search_condition`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition?: (ctx: Search_conditionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.search_condition_and`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition_and?: (ctx: Search_condition_andContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.search_condition_and`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition_and?: (ctx: Search_condition_andContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.search_condition_not`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition_not?: (ctx: Search_condition_notContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.search_condition_not`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition_not?: (ctx: Search_condition_notContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.query_expression`.
	 * @param ctx the parse tree
	 */
	enterQuery_expression?: (ctx: Query_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.query_expression`.
	 * @param ctx the parse tree
	 */
	exitQuery_expression?: (ctx: Query_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.sql_union`.
	 * @param ctx the parse tree
	 */
	enterSql_union?: (ctx: Sql_unionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sql_union`.
	 * @param ctx the parse tree
	 */
	exitSql_union?: (ctx: Sql_unionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.query_specification`.
	 * @param ctx the parse tree
	 */
	enterQuery_specification?: (ctx: Query_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.query_specification`.
	 * @param ctx the parse tree
	 */
	exitQuery_specification?: (ctx: Query_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.top_clause`.
	 * @param ctx the parse tree
	 */
	enterTop_clause?: (ctx: Top_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.top_clause`.
	 * @param ctx the parse tree
	 */
	exitTop_clause?: (ctx: Top_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.top_percent`.
	 * @param ctx the parse tree
	 */
	enterTop_percent?: (ctx: Top_percentContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.top_percent`.
	 * @param ctx the parse tree
	 */
	exitTop_percent?: (ctx: Top_percentContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.top_count`.
	 * @param ctx the parse tree
	 */
	enterTop_count?: (ctx: Top_countContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.top_count`.
	 * @param ctx the parse tree
	 */
	exitTop_count?: (ctx: Top_countContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.for_clause`.
	 * @param ctx the parse tree
	 */
	enterFor_clause?: (ctx: For_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.for_clause`.
	 * @param ctx the parse tree
	 */
	exitFor_clause?: (ctx: For_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xml_common_directives`.
	 * @param ctx the parse tree
	 */
	enterXml_common_directives?: (ctx: Xml_common_directivesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xml_common_directives`.
	 * @param ctx the parse tree
	 */
	exitXml_common_directives?: (ctx: Xml_common_directivesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_expression?: (ctx: Order_by_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_expression?: (ctx: Order_by_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.group_by_item`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_item?: (ctx: Group_by_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.group_by_item`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_item?: (ctx: Group_by_itemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.option_clause`.
	 * @param ctx the parse tree
	 */
	enterOption_clause?: (ctx: Option_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.option_clause`.
	 * @param ctx the parse tree
	 */
	exitOption_clause?: (ctx: Option_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.optimize_for_arg`.
	 * @param ctx the parse tree
	 */
	enterOptimize_for_arg?: (ctx: Optimize_for_argContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.optimize_for_arg`.
	 * @param ctx the parse tree
	 */
	exitOptimize_for_arg?: (ctx: Optimize_for_argContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.select_list`.
	 * @param ctx the parse tree
	 */
	enterSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.select_list`.
	 * @param ctx the parse tree
	 */
	exitSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.udt_method_arguments`.
	 * @param ctx the parse tree
	 */
	enterUdt_method_arguments?: (ctx: Udt_method_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.udt_method_arguments`.
	 * @param ctx the parse tree
	 */
	exitUdt_method_arguments?: (ctx: Udt_method_argumentsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.asterisk`.
	 * @param ctx the parse tree
	 */
	enterAsterisk?: (ctx: AsteriskContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.asterisk`.
	 * @param ctx the parse tree
	 */
	exitAsterisk?: (ctx: AsteriskContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_elem`.
	 * @param ctx the parse tree
	 */
	enterColumn_elem?: (ctx: Column_elemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_elem`.
	 * @param ctx the parse tree
	 */
	exitColumn_elem?: (ctx: Column_elemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.udt_elem`.
	 * @param ctx the parse tree
	 */
	enterUdt_elem?: (ctx: Udt_elemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.udt_elem`.
	 * @param ctx the parse tree
	 */
	exitUdt_elem?: (ctx: Udt_elemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.expression_elem`.
	 * @param ctx the parse tree
	 */
	enterExpression_elem?: (ctx: Expression_elemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.expression_elem`.
	 * @param ctx the parse tree
	 */
	exitExpression_elem?: (ctx: Expression_elemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_elem?: (ctx: Select_list_elemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_elem?: (ctx: Select_list_elemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_sources`.
	 * @param ctx the parse tree
	 */
	enterTable_sources?: (ctx: Table_sourcesContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_sources`.
	 * @param ctx the parse tree
	 */
	exitTable_sources?: (ctx: Table_sourcesContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_source`.
	 * @param ctx the parse tree
	 */
	enterTable_source?: (ctx: Table_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_source`.
	 * @param ctx the parse tree
	 */
	exitTable_source?: (ctx: Table_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 */
	enterTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 */
	exitTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_source_item`.
	 * @param ctx the parse tree
	 */
	enterTable_source_item?: (ctx: Table_source_itemContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_source_item`.
	 * @param ctx the parse tree
	 */
	exitTable_source_item?: (ctx: Table_source_itemContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.open_xml`.
	 * @param ctx the parse tree
	 */
	enterOpen_xml?: (ctx: Open_xmlContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.open_xml`.
	 * @param ctx the parse tree
	 */
	exitOpen_xml?: (ctx: Open_xmlContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.schema_declaration`.
	 * @param ctx the parse tree
	 */
	enterSchema_declaration?: (ctx: Schema_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.schema_declaration`.
	 * @param ctx the parse tree
	 */
	exitSchema_declaration?: (ctx: Schema_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_declaration`.
	 * @param ctx the parse tree
	 */
	enterColumn_declaration?: (ctx: Column_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_declaration`.
	 * @param ctx the parse tree
	 */
	exitColumn_declaration?: (ctx: Column_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.change_table`.
	 * @param ctx the parse tree
	 */
	enterChange_table?: (ctx: Change_tableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.change_table`.
	 * @param ctx the parse tree
	 */
	exitChange_table?: (ctx: Change_tableContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.join_part`.
	 * @param ctx the parse tree
	 */
	enterJoin_part?: (ctx: Join_partContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.join_part`.
	 * @param ctx the parse tree
	 */
	exitJoin_part?: (ctx: Join_partContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	enterPivot_clause?: (ctx: Pivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	exitPivot_clause?: (ctx: Pivot_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	enterUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	exitUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 */
	enterFull_column_name_list?: (ctx: Full_column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 */
	exitFull_column_name_list?: (ctx: Full_column_name_listContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 */
	enterTable_name_with_hint?: (ctx: Table_name_with_hintContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 */
	exitTable_name_with_hint?: (ctx: Table_name_with_hintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.rowset_function`.
	 * @param ctx the parse tree
	 */
	enterRowset_function?: (ctx: Rowset_functionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.rowset_function`.
	 * @param ctx the parse tree
	 */
	exitRowset_function?: (ctx: Rowset_functionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.bulk_option`.
	 * @param ctx the parse tree
	 */
	enterBulk_option?: (ctx: Bulk_optionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.bulk_option`.
	 * @param ctx the parse tree
	 */
	exitBulk_option?: (ctx: Bulk_optionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.derived_table`.
	 * @param ctx the parse tree
	 */
	enterDerived_table?: (ctx: Derived_tableContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.derived_table`.
	 * @param ctx the parse tree
	 */
	exitDerived_table?: (ctx: Derived_tableContext) => void;
	/**
	 * Enter a parse tree produced by the `BINARY_CHECKSUM`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterBINARY_CHECKSUM?: (ctx: BINARY_CHECKSUMContext) => void;
	/**
	 * Exit a parse tree produced by the `BINARY_CHECKSUM`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitBINARY_CHECKSUM?: (ctx: BINARY_CHECKSUMContext) => void;
	/**
	 * Enter a parse tree produced by the `CAST`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterCAST?: (ctx: CASTContext) => void;
	/**
	 * Exit a parse tree produced by the `CAST`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitCAST?: (ctx: CASTContext) => void;
	/**
	 * Enter a parse tree produced by the `CONVERT`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterCONVERT?: (ctx: CONVERTContext) => void;
	/**
	 * Exit a parse tree produced by the `CONVERT`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitCONVERT?: (ctx: CONVERTContext) => void;
	/**
	 * Enter a parse tree produced by the `CHECKSUM`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterCHECKSUM?: (ctx: CHECKSUMContext) => void;
	/**
	 * Exit a parse tree produced by the `CHECKSUM`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitCHECKSUM?: (ctx: CHECKSUMContext) => void;
	/**
	 * Enter a parse tree produced by the `COALESCE`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterCOALESCE?: (ctx: COALESCEContext) => void;
	/**
	 * Exit a parse tree produced by the `COALESCE`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitCOALESCE?: (ctx: COALESCEContext) => void;
	/**
	 * Enter a parse tree produced by the `CURRENT_TIMESTAMP`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterCURRENT_TIMESTAMP?: (ctx: CURRENT_TIMESTAMPContext) => void;
	/**
	 * Exit a parse tree produced by the `CURRENT_TIMESTAMP`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitCURRENT_TIMESTAMP?: (ctx: CURRENT_TIMESTAMPContext) => void;
	/**
	 * Enter a parse tree produced by the `CURRENT_USER`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterCURRENT_USER?: (ctx: CURRENT_USERContext) => void;
	/**
	 * Exit a parse tree produced by the `CURRENT_USER`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitCURRENT_USER?: (ctx: CURRENT_USERContext) => void;
	/**
	 * Enter a parse tree produced by the `DATEADD`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterDATEADD?: (ctx: DATEADDContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEADD`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitDATEADD?: (ctx: DATEADDContext) => void;
	/**
	 * Enter a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterDATEDIFF?: (ctx: DATEDIFFContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitDATEDIFF?: (ctx: DATEDIFFContext) => void;
	/**
	 * Enter a parse tree produced by the `DATENAME`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterDATENAME?: (ctx: DATENAMEContext) => void;
	/**
	 * Exit a parse tree produced by the `DATENAME`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitDATENAME?: (ctx: DATENAMEContext) => void;
	/**
	 * Enter a parse tree produced by the `DATEPART`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterDATEPART?: (ctx: DATEPARTContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEPART`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitDATEPART?: (ctx: DATEPARTContext) => void;
	/**
	 * Enter a parse tree produced by the `GETDATE`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterGETDATE?: (ctx: GETDATEContext) => void;
	/**
	 * Exit a parse tree produced by the `GETDATE`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitGETDATE?: (ctx: GETDATEContext) => void;
	/**
	 * Enter a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterGETUTCDATE?: (ctx: GETUTCDATEContext) => void;
	/**
	 * Exit a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitGETUTCDATE?: (ctx: GETUTCDATEContext) => void;
	/**
	 * Enter a parse tree produced by the `IDENTITY`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterIDENTITY?: (ctx: IDENTITYContext) => void;
	/**
	 * Exit a parse tree produced by the `IDENTITY`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitIDENTITY?: (ctx: IDENTITYContext) => void;
	/**
	 * Enter a parse tree produced by the `MIN_ACTIVE_ROWVERSION`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterMIN_ACTIVE_ROWVERSION?: (ctx: MIN_ACTIVE_ROWVERSIONContext) => void;
	/**
	 * Exit a parse tree produced by the `MIN_ACTIVE_ROWVERSION`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitMIN_ACTIVE_ROWVERSION?: (ctx: MIN_ACTIVE_ROWVERSIONContext) => void;
	/**
	 * Enter a parse tree produced by the `NULLIF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterNULLIF?: (ctx: NULLIFContext) => void;
	/**
	 * Exit a parse tree produced by the `NULLIF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitNULLIF?: (ctx: NULLIFContext) => void;
	/**
	 * Enter a parse tree produced by the `STUFF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSTUFF?: (ctx: STUFFContext) => void;
	/**
	 * Exit a parse tree produced by the `STUFF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSTUFF?: (ctx: STUFFContext) => void;
	/**
	 * Enter a parse tree produced by the `SESSION_USER`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSESSION_USER?: (ctx: SESSION_USERContext) => void;
	/**
	 * Exit a parse tree produced by the `SESSION_USER`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSESSION_USER?: (ctx: SESSION_USERContext) => void;
	/**
	 * Enter a parse tree produced by the `SYSTEM_USER`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSYSTEM_USER?: (ctx: SYSTEM_USERContext) => void;
	/**
	 * Exit a parse tree produced by the `SYSTEM_USER`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSYSTEM_USER?: (ctx: SYSTEM_USERContext) => void;
	/**
	 * Enter a parse tree produced by the `ISNULL`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterISNULL?: (ctx: ISNULLContext) => void;
	/**
	 * Exit a parse tree produced by the `ISNULL`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitISNULL?: (ctx: ISNULLContext) => void;
	/**
	 * Enter a parse tree produced by the `XML_DATA_TYPE_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterXML_DATA_TYPE_FUNC?: (ctx: XML_DATA_TYPE_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `XML_DATA_TYPE_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitXML_DATA_TYPE_FUNC?: (ctx: XML_DATA_TYPE_FUNCContext) => void;
	/**
	 * Enter a parse tree produced by the `IFF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterIFF?: (ctx: IFFContext) => void;
	/**
	 * Exit a parse tree produced by the `IFF`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitIFF?: (ctx: IFFContext) => void;
	/**
	 * Enter a parse tree produced by the `RANKING_WINDOWED_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterRANKING_WINDOWED_FUNC?: (ctx: RANKING_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `RANKING_WINDOWED_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitRANKING_WINDOWED_FUNC?: (ctx: RANKING_WINDOWED_FUNCContext) => void;
	/**
	 * Enter a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => void;
	/**
	 * Enter a parse tree produced by the `ANALYTIC_WINDOWED_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterANALYTIC_WINDOWED_FUNC?: (ctx: ANALYTIC_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `ANALYTIC_WINDOWED_FUNC`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitANALYTIC_WINDOWED_FUNC?: (ctx: ANALYTIC_WINDOWED_FUNCContext) => void;
	/**
	 * Enter a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => void;
	/**
	 * Exit a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => void;
	/**
	 * Enter a parse tree produced by the `STRINGAGG`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSTRINGAGG?: (ctx: STRINGAGGContext) => void;
	/**
	 * Exit a parse tree produced by the `STRINGAGG`
	 * labeled alternative in `SqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSTRINGAGG?: (ctx: STRINGAGGContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.xml_data_type_methods`.
	 * @param ctx the parse tree
	 */
	enterXml_data_type_methods?: (ctx: Xml_data_type_methodsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.xml_data_type_methods`.
	 * @param ctx the parse tree
	 */
	exitXml_data_type_methods?: (ctx: Xml_data_type_methodsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.value_method`.
	 * @param ctx the parse tree
	 */
	enterValue_method?: (ctx: Value_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.value_method`.
	 * @param ctx the parse tree
	 */
	exitValue_method?: (ctx: Value_methodContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.query_method`.
	 * @param ctx the parse tree
	 */
	enterQuery_method?: (ctx: Query_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.query_method`.
	 * @param ctx the parse tree
	 */
	exitQuery_method?: (ctx: Query_methodContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.exist_method`.
	 * @param ctx the parse tree
	 */
	enterExist_method?: (ctx: Exist_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.exist_method`.
	 * @param ctx the parse tree
	 */
	exitExist_method?: (ctx: Exist_methodContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.modify_method`.
	 * @param ctx the parse tree
	 */
	enterModify_method?: (ctx: Modify_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.modify_method`.
	 * @param ctx the parse tree
	 */
	exitModify_method?: (ctx: Modify_methodContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.nodes_method`.
	 * @param ctx the parse tree
	 */
	enterNodes_method?: (ctx: Nodes_methodContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.nodes_method`.
	 * @param ctx the parse tree
	 */
	exitNodes_method?: (ctx: Nodes_methodContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.switch_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_section?: (ctx: Switch_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.switch_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_section?: (ctx: Switch_sectionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 */
	enterAs_column_alias?: (ctx: As_column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 */
	exitAs_column_alias?: (ctx: As_column_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 */
	enterAs_table_alias?: (ctx: As_table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 */
	exitAs_table_alias?: (ctx: As_table_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.with_table_hints`.
	 * @param ctx the parse tree
	 */
	enterWith_table_hints?: (ctx: With_table_hintsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.with_table_hints`.
	 * @param ctx the parse tree
	 */
	exitWith_table_hints?: (ctx: With_table_hintsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.insert_with_table_hints`.
	 * @param ctx the parse tree
	 */
	enterInsert_with_table_hints?: (ctx: Insert_with_table_hintsContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.insert_with_table_hints`.
	 * @param ctx the parse tree
	 */
	exitInsert_with_table_hints?: (ctx: Insert_with_table_hintsContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_hint`.
	 * @param ctx the parse tree
	 */
	enterTable_hint?: (ctx: Table_hintContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_hint`.
	 * @param ctx the parse tree
	 */
	exitTable_hint?: (ctx: Table_hintContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.index_value`.
	 * @param ctx the parse tree
	 */
	enterIndex_value?: (ctx: Index_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.index_value`.
	 * @param ctx the parse tree
	 */
	exitIndex_value?: (ctx: Index_valueContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias_list?: (ctx: Column_alias_listContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias_list?: (ctx: Column_alias_listContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_value_constructor`.
	 * @param ctx the parse tree
	 */
	enterTable_value_constructor?: (ctx: Table_value_constructorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_value_constructor`.
	 * @param ctx the parse tree
	 */
	exitTable_value_constructor?: (ctx: Table_value_constructorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ranking_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ranking_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.analytic_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterAnalytic_windowed_function?: (ctx: Analytic_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.analytic_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitAnalytic_windowed_function?: (ctx: Analytic_windowed_functionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 */
	enterAll_distinct_expression?: (ctx: All_distinct_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 */
	exitAll_distinct_expression?: (ctx: All_distinct_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.over_clause`.
	 * @param ctx the parse tree
	 */
	enterOver_clause?: (ctx: Over_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.over_clause`.
	 * @param ctx the parse tree
	 */
	exitOver_clause?: (ctx: Over_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.row_or_range_clause`.
	 * @param ctx the parse tree
	 */
	enterRow_or_range_clause?: (ctx: Row_or_range_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.row_or_range_clause`.
	 * @param ctx the parse tree
	 */
	exitRow_or_range_clause?: (ctx: Row_or_range_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.window_frame_extent`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_extent?: (ctx: Window_frame_extentContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.window_frame_extent`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_extent?: (ctx: Window_frame_extentContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.window_frame_bound`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_bound?: (ctx: Window_frame_boundContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.window_frame_bound`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_bound?: (ctx: Window_frame_boundContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.window_frame_preceding`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_preceding?: (ctx: Window_frame_precedingContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.window_frame_preceding`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_preceding?: (ctx: Window_frame_precedingContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.window_frame_following`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_following?: (ctx: Window_frame_followingContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.window_frame_following`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_following?: (ctx: Window_frame_followingContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.full_table_name`.
	 * @param ctx the parse tree
	 */
	enterFull_table_name?: (ctx: Full_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.full_table_name`.
	 * @param ctx the parse tree
	 */
	exitFull_table_name?: (ctx: Full_table_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.simple_name`.
	 * @param ctx the parse tree
	 */
	enterSimple_name?: (ctx: Simple_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.simple_name`.
	 * @param ctx the parse tree
	 */
	exitSimple_name?: (ctx: Simple_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.func_proc_name_schema`.
	 * @param ctx the parse tree
	 */
	enterFunc_proc_name_schema?: (ctx: Func_proc_name_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.func_proc_name_schema`.
	 * @param ctx the parse tree
	 */
	exitFunc_proc_name_schema?: (ctx: Func_proc_name_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.func_proc_name_database_schema`.
	 * @param ctx the parse tree
	 */
	enterFunc_proc_name_database_schema?: (ctx: Func_proc_name_database_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.func_proc_name_database_schema`.
	 * @param ctx the parse tree
	 */
	exitFunc_proc_name_database_schema?: (ctx: Func_proc_name_database_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.func_proc_name_server_database_schema`.
	 * @param ctx the parse tree
	 */
	enterFunc_proc_name_server_database_schema?: (ctx: Func_proc_name_server_database_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.func_proc_name_server_database_schema`.
	 * @param ctx the parse tree
	 */
	exitFunc_proc_name_server_database_schema?: (ctx: Func_proc_name_server_database_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.ddl_object`.
	 * @param ctx the parse tree
	 */
	enterDdl_object?: (ctx: Ddl_objectContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.ddl_object`.
	 * @param ctx the parse tree
	 */
	exitDdl_object?: (ctx: Ddl_objectContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.full_column_name`.
	 * @param ctx the parse tree
	 */
	enterFull_column_name?: (ctx: Full_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.full_column_name`.
	 * @param ctx the parse tree
	 */
	exitFull_column_name?: (ctx: Full_column_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_name_list_with_order`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_list_with_order?: (ctx: Column_name_list_with_orderContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_name_list_with_order`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_list_with_order?: (ctx: Column_name_list_with_orderContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.column_name_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_list?: (ctx: Column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.column_name_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_list?: (ctx: Column_name_listContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.cursor_name`.
	 * @param ctx the parse tree
	 */
	enterCursor_name?: (ctx: Cursor_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.cursor_name`.
	 * @param ctx the parse tree
	 */
	exitCursor_name?: (ctx: Cursor_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.on_off`.
	 * @param ctx the parse tree
	 */
	enterOn_off?: (ctx: On_offContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.on_off`.
	 * @param ctx the parse tree
	 */
	exitOn_off?: (ctx: On_offContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.clustered`.
	 * @param ctx the parse tree
	 */
	enterClustered?: (ctx: ClusteredContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.clustered`.
	 * @param ctx the parse tree
	 */
	exitClustered?: (ctx: ClusteredContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.null_notnull`.
	 * @param ctx the parse tree
	 */
	enterNull_notnull?: (ctx: Null_notnullContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.null_notnull`.
	 * @param ctx the parse tree
	 */
	exitNull_notnull?: (ctx: Null_notnullContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.null_or_default`.
	 * @param ctx the parse tree
	 */
	enterNull_or_default?: (ctx: Null_or_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.null_or_default`.
	 * @param ctx the parse tree
	 */
	exitNull_or_default?: (ctx: Null_or_defaultContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 */
	enterScalar_function_name?: (ctx: Scalar_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 */
	exitScalar_function_name?: (ctx: Scalar_function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.sign`.
	 * @param ctx the parse tree
	 */
	enterSign?: (ctx: SignContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.sign`.
	 * @param ctx the parse tree
	 */
	exitSign?: (ctx: SignContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.simple_id`.
	 * @param ctx the parse tree
	 */
	enterSimple_id?: (ctx: Simple_idContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.simple_id`.
	 * @param ctx the parse tree
	 */
	exitSimple_id?: (ctx: Simple_idContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `SqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;
}

