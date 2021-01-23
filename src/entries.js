const entries = [
['01',	'27',	'30',	'46',	'55',	'04'],
['09',	'41',	'49',	'53',	'64',	'15'],
['12',	'38',	'42',	'49',	'67',	'25'],
['10',	'11',	'16',	'32',	'69',	'02'],
['02',	'07',	'08',	'53',	'57',	'02'],
['06',	'08',	'48',	'54',	'64',	'25'],
['16',	'38',	'53',	'62',	'70',	'21'],
['28',	'36',	'49',	'59',	'67',	'01'],
['27',	'33',	'49',	'52',	'55',	'23'],
['13',	'16',	'44',	'59',	'68',	'06'],
['11',	'20',	'30',	'45',	'48',	'22'],
['21',	'22',	'23',	'41',	'57',	'21'],
['03',	'04',	'17',	'22',	'25',	'01'],
['34',	'53',	'60',	'63',	'65',	'01'],
['06',	'15',	'26',	'28',	'46',	'04'],
['10',	'13',	'23',	'26',	'41',	'13'],
['14',	'17',	'19',	'24',	'38',	'15'],
['17',	'27',	'42',	'53',	'55',	'02'],
['07',	'15',	'16',	'26',	'69',	'10'],
['37',	'40',	'59',	'61',	'69',	'02'],
['05',	'32',	'35',	'60',	'66',	'19'],
['03',	'22',	'45',	'46',	'68',	'06'],
['18',	'20',	'26',	'51',	'57',	'20'],
['03',	'09',	'45',	'47',	'54',	'03'],
['06',	'09',	'10',	'16',	'47',	'13'],
['01',	'10',	'26',	'32',	'45',	'17'],
['03',	'04',	'07',	'19',	'42',	'12'],
['07',	'17',	'49',	'56',	'59',	'23'],
['05',	'29',	'42',	'46',	'70',	'08'],
['14',	'29',	'35',	'39',	'51',	'19'],
['21',	'25',	'34',	'41',	'57',	'22'],
['25',	'34',	'36',	'49',	'52',	'13'],
['10',	'15',	'16',	'51',	'53',	'21'],
['01',	'16',	'23',	'30',	'34',	'08'],
['06',	'21',	'25',	'35',	'37',	'09'],
['18',	'30',	'32',	'39',	'58',	'06'],
['08',	'13',	'28',	'46',	'56',	'20'],
['03',	'06',	'09',	'10',	'40',	'23'],
['02',	'15',	'18',	'28',	'50',	'22'],
['27',	'38',	'40',	'41',	'45',	'22'],
['16',	'23',	'44',	'65',	'66',	'08'],
['19',	'24',	'34',	'39',	'43',	'18'],
['04',	'09',	'24',	'28',	'63',	'16'],
['15',	'24',	'35',	'52',	'70',	'15'],
['18',	'31',	'46',	'51',	'53',	'06'],
['15',	'34',	'37',	'46',	'58',	'25'],
['03',	'05',	'11',	'17',	'28',	'23'],
['13',	'20',	'40',	'47',	'66',	'12'],
['14',	'28',	'40',	'45',	'51',	'21'],
['05',	'14',	'23',	'25',	'69',	'22'],
['03',	'08',	'25',	'45',	'52',	'07'],
['15',	'33',	'38',	'58',	'67',	'03'],
['07',	'21',	'40',	'50',	'63',	'25'],
['25',	'26',	'34',	'39',	'57',	'17'],
['09',	'22',	'35',	'39',	'44',	'21'],
['21',	'39',	'42',	'64',	'67',	'07'],
['21',	'23',	'32',	'40',	'56',	'23'],
['27',	'33',	'59',	'61',	'67',	'04'],
['08',	'12',	'29',	'53',	'59',	'12'],
['10',	'42',	'56',	'64',	'70',	'13'],
['08',	'13',	'32',	'34',	'55',	'03'],
['06',	'07',	'10',	'52',	'68',	'09'],
['40',	'42',	'48',	'57',	'59',	'10'],
['19',	'41',	'45',	'51',	'63',	'13'],
['37',	'45',	'46',	'49',	'68',	'11'],
['02',	'07',	'35',	'59',	'68',	'07'],
['23',	'24',	'40',	'53',	'70',	'19'],
['10',	'22',	'23',	'60',	'62',	'01'],
['18',	'25',	'34',	'36',	'59',	'17'],
['04',	'19',	'49',	'52',	'55',	'24'],
['08',	'24',	'50',	'64',	'67',	'09'],
['31',	'38',	'47',	'63',	'70',	'03'],
['15',	'19',	'34',	'55',	'69',	'17'],
['24',	'42',	'48',	'57',	'62',	'07'],
['06',	'08',	'29',	'49',	'58',	'23'],
['03',	'10',	'15',	'21',	'69',	'16'],
['04',	'26',	'42',	'53',	'65',	'10'],
['18',	'33',	'37',	'54',	'65',	'25'],
['04',	'06',	'15',	'22',	'41',	'25'],
['08',	'10',	'21',	'52',	'54',	'02'],
['18',	'24',	'39',	'43',	'50',	'12'],
['09',	'11',	'29',	'46',	'66',	'10'],
['05',	'15',	'34',	'42',	'57',	'10'],
['12',	'25',	'34',	'38',	'44',	'06'],
['35',	'39',	'55',	'57',	'66',	'25'],
['09',	'18',	'34',	'45',	'52',	'08'],
['13',	'15',	'21',	'23',	'70',	'11'],
['05',	'10',	'12',	'33',	'37',	'01'],
['07',	'14',	'23',	'55',	'70',	'09'],
['14',	'28',	'47',	'49',	'59',	'17'],
['09',	'32',	'34',	'44',	'54',	'02'],
['10',	'18',	'25',	'28',	'29',	'15'],
['05',	'22',	'35',	'38',	'48',	'13'],
['03',	'25',	'36',	'57',	'62',	'13'],
['05',	'48',	'56',	'61',	'66',	'23'],
['03',	'12',	'16',	'18',	'39',	'07'],
['10',	'28',	'40',	'48',	'68',	'02'],
['05',	'07',	'12',	'41',	'51',	'25'],
['46',	'51',	'57',	'63',	'67',	'04'],
['04',	'12',	'28',	'29',	'39',	'05'],
['37',	'45',	'48',	'63',	'64',	'13'],
['05',	'13',	'18',	'59',	'62',	'10'],
['17',	'45',	'55',	'57',	'61',	'14'],
['09',	'26',	'41',	'52',	'65',	'09'],
['22',	'39',	'48',	'54',	'57',	'24'],
['04',	'39',	'54',	'58',	'62',	'07'],
['01',	'05',	'13',	'30',	'43',	'20'],
['12',	'43',	'50',	'58',	'62',	'22'],
['15',	'32',	'53',	'62',	'66',	'03'],
['03',	'10',	'25',	'64',	'70',	'02'],
['05',	'21',	'22',	'36',	'63',	'24'],
['01',	'05',	'11',	'27',	'60',	'22'],
['12',	'13',	'35',	'48',	'61',	'01'],
['25',	'27',	'35',	'49',	'54',	'25'],
['17',	'19',	'44',	'49',	'53',	'18'],
['04',	'11',	'27',	'29',	'54',	'07'],
['15',	'24',	'28',	'43',	'62',	'03'],
['04',	'44',	'58',	'61',	'69',	'07'],
['10',	'13',	'24',	'33',	'68',	'11'],
['19',	'35',	'46',	'56',	'62',	'14'],
['09',	'17',	'27',	'31',	'33',	'12'],
['05',	'10',	'35',	'38',	'69',	'15'],
['05',	'36',	'08',	'26',	'63',	'16'],
['04',	'35',	'36',	'43',	'56',	'23'],
['23',	'31',	'40',	'63',	'70',	'17'],
['20',	'22',	'37',	'47',	'51',	'15'],
['04',	'42',	'49',	'57',	'59',	'21'],
['06',	'08',	'20',	'49',	'54',	'22'],
['01',	'30',	'49',	'54',	'58',	'19'],
['06',	'08',	'11',	'28',	'66',	'06'],
['14',	'30',	'53',	'61',	'70',	'22'],
['27',	'36',	'41',	'55',	'67',	'01'],
['01',	'14',	'27',	'36',	'55',	'23'],
['03',	'13',	'25',	'38',	'44',	'10'],
['01',	'50',	'57',	'62',	'68',	'19'],
['04',	'29',	'38',	'39',	'45',	'09'],
['06',	'10',	'18',	'50',	'57',	'09'],
['15',	'24',	'31',	'39',	'43',	'17'],
['19',	'27',	'35',	'38',	'69',	'19'],
['02',	'06',	'29',	'32',	'57',	'06'],
['08',	'21',	'31',	'50',	'57',	'23'],
['01',	'03',	'07',	'42',	'48',	'20'],
['01',	'21',	'35',	'44',	'67',	'20'],
['08',	'50',	'56',	'63',	'67',	'17'],
['14',	'26',	'?',	'50',	'62',	'13'],
['18',	'43',	'53',	'58',	'70',	'23'],
['08',	'29',	'60',	'67',	'70',	'02'],
['10',	'28',	'37',	'41',	'48',	'24'],
['05',	'13',	'35',	'49',	'62',	'19'],
                        
];

export default entries;