clear;
def=legacy_code('initialize');
def.SFunctionName='hello';
legacy_code('sfcn_cmex_generate',def);
legacy_code('compile',def);
legacy_code('slblock_generate', def);