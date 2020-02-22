require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "nested": {
        "hw": {
            "nested": {
                "trezor": {
                    "nested": {
                        "messages": {
                            "options": {
                                "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                "java_outer_classname": "TrezorMessage"
                            },
                            "nested": {
                                "binance": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageBinance"
                                    },
                                    "nested": {
                                        "BinanceGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "BinanceAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "BinanceGetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "BinancePublicKey": {
                                            "fields": {
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "BinanceSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "msg_count": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "account_number": {
                                                    "type": "sint64",
                                                    "id": 3
                                                },
                                                "chain_id": {
                                                    "type": "string",
                                                    "id": 4
                                                },
                                                "memo": {
                                                    "type": "string",
                                                    "id": 5
                                                },
                                                "sequence": {
                                                    "type": "sint64",
                                                    "id": 6
                                                },
                                                "source": {
                                                    "type": "sint64",
                                                    "id": 7
                                                }
                                            }
                                        },
                                        "BinanceTxRequest": {
                                            "fields": {}
                                        },
                                        "BinanceTransferMsg": {
                                            "fields": {
                                                "inputs": {
                                                    "rule": "repeated",
                                                    "type": "BinanceInputOutput",
                                                    "id": 1
                                                },
                                                "outputs": {
                                                    "rule": "repeated",
                                                    "type": "BinanceInputOutput",
                                                    "id": 2
                                                }
                                            },
                                            "nested": {
                                                "BinanceInputOutput": {
                                                    "fields": {
                                                        "address": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "coins": {
                                                            "rule": "repeated",
                                                            "type": "BinanceCoin",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "BinanceCoin": {
                                                    "fields": {
                                                        "amount": {
                                                            "type": "sint64",
                                                            "id": 1
                                                        },
                                                        "denom": {
                                                            "type": "string",
                                                            "id": 2
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "BinanceOrderMsg": {
                                            "fields": {
                                                "id": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "ordertype": {
                                                    "type": "BinanceOrderType",
                                                    "id": 2
                                                },
                                                "price": {
                                                    "type": "sint64",
                                                    "id": 3
                                                },
                                                "quantity": {
                                                    "type": "sint64",
                                                    "id": 4
                                                },
                                                "sender": {
                                                    "type": "string",
                                                    "id": 5
                                                },
                                                "side": {
                                                    "type": "BinanceOrderSide",
                                                    "id": 6
                                                },
                                                "symbol": {
                                                    "type": "string",
                                                    "id": 7
                                                },
                                                "timeinforce": {
                                                    "type": "BinanceTimeInForce",
                                                    "id": 8
                                                }
                                            },
                                            "nested": {
                                                "BinanceOrderType": {
                                                    "values": {
                                                        "OT_UNKNOWN": 0,
                                                        "MARKET": 1,
                                                        "LIMIT": 2,
                                                        "OT_RESERVED": 3
                                                    }
                                                },
                                                "BinanceOrderSide": {
                                                    "values": {
                                                        "SIDE_UNKNOWN": 0,
                                                        "BUY": 1,
                                                        "SELL": 2
                                                    }
                                                },
                                                "BinanceTimeInForce": {
                                                    "values": {
                                                        "TIF_UNKNOWN": 0,
                                                        "GTE": 1,
                                                        "TIF_RESERVED": 2,
                                                        "IOC": 3
                                                    }
                                                }
                                            }
                                        },
                                        "BinanceCancelMsg": {
                                            "fields": {
                                                "refid": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "sender": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "symbol": {
                                                    "type": "string",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "BinanceSignedTx": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        }
                                    }
                                },
                                "bitcoin": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageBitcoin"
                                    },
                                    "nested": {
                                        "InputScriptType": {
                                            "values": {
                                                "SPENDADDRESS": 0,
                                                "SPENDMULTISIG": 1,
                                                "EXTERNAL": 2,
                                                "SPENDWITNESS": 3,
                                                "SPENDP2SHWITNESS": 4
                                            }
                                        },
                                        "MultisigRedeemScriptType": {
                                            "fields": {
                                                "pubkeys": {
                                                    "rule": "repeated",
                                                    "type": "HDNodePathType",
                                                    "id": 1
                                                },
                                                "signatures": {
                                                    "rule": "repeated",
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "m": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "nodes": {
                                                    "rule": "repeated",
                                                    "type": "hw.trezor.messages.common.HDNodeType",
                                                    "id": 4
                                                },
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 5,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                }
                                            },
                                            "nested": {
                                                "HDNodePathType": {
                                                    "fields": {
                                                        "node": {
                                                            "rule": "required",
                                                            "type": "hw.trezor.messages.common.HDNodeType",
                                                            "id": 1
                                                        },
                                                        "address_n": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 2,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "GetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "ecdsa_curve_name": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "coin_name": {
                                                    "type": "string",
                                                    "id": 4,
                                                    "options": {
                                                        "default": "Bitcoin"
                                                    }
                                                },
                                                "script_type": {
                                                    "type": "InputScriptType",
                                                    "id": 5,
                                                    "options": {
                                                        "default": "SPENDADDRESS"
                                                    }
                                                }
                                            }
                                        },
                                        "PublicKey": {
                                            "fields": {
                                                "node": {
                                                    "type": "hw.trezor.messages.common.HDNodeType",
                                                    "id": 1
                                                },
                                                "xpub": {
                                                    "type": "string",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "GetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "coin_name": {
                                                    "type": "string",
                                                    "id": 2,
                                                    "options": {
                                                        "default": "Bitcoin"
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "multisig": {
                                                    "type": "MultisigRedeemScriptType",
                                                    "id": 4
                                                },
                                                "script_type": {
                                                    "type": "InputScriptType",
                                                    "id": 5,
                                                    "options": {
                                                        "default": "SPENDADDRESS"
                                                    }
                                                }
                                            }
                                        },
                                        "Address": {
                                            "fields": {
                                                "address": {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "SignMessage": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "message": {
                                                    "rule": "required",
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "coin_name": {
                                                    "type": "string",
                                                    "id": 3,
                                                    "options": {
                                                        "default": "Bitcoin"
                                                    }
                                                },
                                                "script_type": {
                                                    "type": "InputScriptType",
                                                    "id": 4,
                                                    "options": {
                                                        "default": "SPENDADDRESS"
                                                    }
                                                }
                                            }
                                        },
                                        "MessageSignature": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "VerifyMessage": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "message": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "coin_name": {
                                                    "type": "string",
                                                    "id": 4,
                                                    "options": {
                                                        "default": "Bitcoin"
                                                    }
                                                }
                                            }
                                        },
                                        "SignTx": {
                                            "fields": {
                                                "outputs_count": {
                                                    "rule": "required",
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "inputs_count": {
                                                    "rule": "required",
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "coin_name": {
                                                    "type": "string",
                                                    "id": 3,
                                                    "options": {
                                                        "default": "Bitcoin"
                                                    }
                                                },
                                                "version": {
                                                    "type": "uint32",
                                                    "id": 4,
                                                    "options": {
                                                        "default": 1
                                                    }
                                                },
                                                "lock_time": {
                                                    "type": "uint32",
                                                    "id": 5,
                                                    "options": {
                                                        "default": 0
                                                    }
                                                },
                                                "expiry": {
                                                    "type": "uint32",
                                                    "id": 6
                                                },
                                                "overwintered": {
                                                    "type": "bool",
                                                    "id": 7
                                                },
                                                "version_group_id": {
                                                    "type": "uint32",
                                                    "id": 8
                                                },
                                                "timestamp": {
                                                    "type": "uint32",
                                                    "id": 9
                                                },
                                                "branch_id": {
                                                    "type": "uint32",
                                                    "id": 10
                                                }
                                            }
                                        },
                                        "TxRequest": {
                                            "fields": {
                                                "request_type": {
                                                    "type": "RequestType",
                                                    "id": 1
                                                },
                                                "details": {
                                                    "type": "TxRequestDetailsType",
                                                    "id": 2
                                                },
                                                "serialized": {
                                                    "type": "TxRequestSerializedType",
                                                    "id": 3
                                                }
                                            },
                                            "nested": {
                                                "RequestType": {
                                                    "values": {
                                                        "TXINPUT": 0,
                                                        "TXOUTPUT": 1,
                                                        "TXMETA": 2,
                                                        "TXFINISHED": 3,
                                                        "TXEXTRADATA": 4
                                                    }
                                                },
                                                "TxRequestDetailsType": {
                                                    "fields": {
                                                        "request_index": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "tx_hash": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "extra_data_len": {
                                                            "type": "uint32",
                                                            "id": 3
                                                        },
                                                        "extra_data_offset": {
                                                            "type": "uint32",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "TxRequestSerializedType": {
                                                    "fields": {
                                                        "signature_index": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "signature": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "serialized_tx": {
                                                            "type": "bytes",
                                                            "id": 3
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "TxAck": {
                                            "fields": {
                                                "tx": {
                                                    "type": "TransactionType",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "TransactionType": {
                                                    "fields": {
                                                        "version": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "inputs": {
                                                            "rule": "repeated",
                                                            "type": "TxInputType",
                                                            "id": 2
                                                        },
                                                        "bin_outputs": {
                                                            "rule": "repeated",
                                                            "type": "TxOutputBinType",
                                                            "id": 3
                                                        },
                                                        "lock_time": {
                                                            "type": "uint32",
                                                            "id": 4
                                                        },
                                                        "outputs": {
                                                            "rule": "repeated",
                                                            "type": "TxOutputType",
                                                            "id": 5
                                                        },
                                                        "inputs_cnt": {
                                                            "type": "uint32",
                                                            "id": 6
                                                        },
                                                        "outputs_cnt": {
                                                            "type": "uint32",
                                                            "id": 7
                                                        },
                                                        "extra_data": {
                                                            "type": "bytes",
                                                            "id": 8
                                                        },
                                                        "extra_data_len": {
                                                            "type": "uint32",
                                                            "id": 9
                                                        },
                                                        "expiry": {
                                                            "type": "uint32",
                                                            "id": 10
                                                        },
                                                        "overwintered": {
                                                            "type": "bool",
                                                            "id": 11
                                                        },
                                                        "version_group_id": {
                                                            "type": "uint32",
                                                            "id": 12
                                                        },
                                                        "timestamp": {
                                                            "type": "uint32",
                                                            "id": 13
                                                        },
                                                        "branch_id": {
                                                            "type": "uint32",
                                                            "id": 14
                                                        }
                                                    },
                                                    "nested": {
                                                        "TxInputType": {
                                                            "fields": {
                                                                "address_n": {
                                                                    "rule": "repeated",
                                                                    "type": "uint32",
                                                                    "id": 1,
                                                                    "options": {
                                                                        "packed": false
                                                                    }
                                                                },
                                                                "prev_hash": {
                                                                    "rule": "required",
                                                                    "type": "bytes",
                                                                    "id": 2
                                                                },
                                                                "prev_index": {
                                                                    "rule": "required",
                                                                    "type": "uint32",
                                                                    "id": 3
                                                                },
                                                                "script_sig": {
                                                                    "type": "bytes",
                                                                    "id": 4
                                                                },
                                                                "sequence": {
                                                                    "type": "uint32",
                                                                    "id": 5,
                                                                    "options": {
                                                                        "default": 4294967295
                                                                    }
                                                                },
                                                                "script_type": {
                                                                    "type": "InputScriptType",
                                                                    "id": 6,
                                                                    "options": {
                                                                        "default": "SPENDADDRESS"
                                                                    }
                                                                },
                                                                "multisig": {
                                                                    "type": "MultisigRedeemScriptType",
                                                                    "id": 7
                                                                },
                                                                "amount": {
                                                                    "type": "uint64",
                                                                    "id": 8
                                                                },
                                                                "decred_tree": {
                                                                    "type": "uint32",
                                                                    "id": 9
                                                                },
                                                                "decred_script_version": {
                                                                    "type": "uint32",
                                                                    "id": 10
                                                                },
                                                                "prev_block_hash_bip115": {
                                                                    "type": "bytes",
                                                                    "id": 11
                                                                },
                                                                "prev_block_height_bip115": {
                                                                    "type": "uint32",
                                                                    "id": 12
                                                                }
                                                            }
                                                        },
                                                        "TxOutputBinType": {
                                                            "fields": {
                                                                "amount": {
                                                                    "rule": "required",
                                                                    "type": "uint64",
                                                                    "id": 1
                                                                },
                                                                "script_pubkey": {
                                                                    "rule": "required",
                                                                    "type": "bytes",
                                                                    "id": 2
                                                                },
                                                                "decred_script_version": {
                                                                    "type": "uint32",
                                                                    "id": 3
                                                                }
                                                            }
                                                        },
                                                        "TxOutputType": {
                                                            "fields": {
                                                                "address": {
                                                                    "type": "string",
                                                                    "id": 1
                                                                },
                                                                "address_n": {
                                                                    "rule": "repeated",
                                                                    "type": "uint32",
                                                                    "id": 2,
                                                                    "options": {
                                                                        "packed": false
                                                                    }
                                                                },
                                                                "amount": {
                                                                    "rule": "required",
                                                                    "type": "uint64",
                                                                    "id": 3
                                                                },
                                                                "script_type": {
                                                                    "rule": "required",
                                                                    "type": "OutputScriptType",
                                                                    "id": 4
                                                                },
                                                                "multisig": {
                                                                    "type": "MultisigRedeemScriptType",
                                                                    "id": 5
                                                                },
                                                                "op_return_data": {
                                                                    "type": "bytes",
                                                                    "id": 6
                                                                },
                                                                "decred_script_version": {
                                                                    "type": "uint32",
                                                                    "id": 7
                                                                },
                                                                "block_hash_bip115": {
                                                                    "type": "bytes",
                                                                    "id": 8
                                                                },
                                                                "block_height_bip115": {
                                                                    "type": "uint32",
                                                                    "id": 9
                                                                }
                                                            },
                                                            "nested": {
                                                                "OutputScriptType": {
                                                                    "values": {
                                                                        "PAYTOADDRESS": 0,
                                                                        "PAYTOSCRIPTHASH": 1,
                                                                        "PAYTOMULTISIG": 2,
                                                                        "PAYTOOPRETURN": 3,
                                                                        "PAYTOWITNESS": 4,
                                                                        "PAYTOP2SHWITNESS": 5
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "common": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageCommon"
                                    },
                                    "nested": {
                                        "Success": {
                                            "fields": {
                                                "message": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "Failure": {
                                            "fields": {
                                                "code": {
                                                    "type": "FailureType",
                                                    "id": 1
                                                },
                                                "message": {
                                                    "type": "string",
                                                    "id": 2
                                                }
                                            },
                                            "nested": {
                                                "FailureType": {
                                                    "values": {
                                                        "Failure_UnexpectedMessage": 1,
                                                        "Failure_ButtonExpected": 2,
                                                        "Failure_DataError": 3,
                                                        "Failure_ActionCancelled": 4,
                                                        "Failure_PinExpected": 5,
                                                        "Failure_PinCancelled": 6,
                                                        "Failure_PinInvalid": 7,
                                                        "Failure_InvalidSignature": 8,
                                                        "Failure_ProcessError": 9,
                                                        "Failure_NotEnoughFunds": 10,
                                                        "Failure_NotInitialized": 11,
                                                        "Failure_PinMismatch": 12,
                                                        "Failure_WipeCodeMismatch": 13,
                                                        "Failure_FirmwareError": 99
                                                    }
                                                }
                                            }
                                        },
                                        "ButtonRequest": {
                                            "fields": {
                                                "code": {
                                                    "type": "ButtonRequestType",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "ButtonRequestType": {
                                                    "values": {
                                                        "ButtonRequest_Other": 1,
                                                        "ButtonRequest_FeeOverThreshold": 2,
                                                        "ButtonRequest_ConfirmOutput": 3,
                                                        "ButtonRequest_ResetDevice": 4,
                                                        "ButtonRequest_ConfirmWord": 5,
                                                        "ButtonRequest_WipeDevice": 6,
                                                        "ButtonRequest_ProtectCall": 7,
                                                        "ButtonRequest_SignTx": 8,
                                                        "ButtonRequest_FirmwareCheck": 9,
                                                        "ButtonRequest_Address": 10,
                                                        "ButtonRequest_PublicKey": 11,
                                                        "ButtonRequest_MnemonicWordCount": 12,
                                                        "ButtonRequest_MnemonicInput": 13,
                                                        "ButtonRequest_PassphraseType": 14,
                                                        "ButtonRequest_UnknownDerivationPath": 15,
                                                        "ButtonRequest_RecoveryHomepage": 16,
                                                        "ButtonRequest_Success": 17,
                                                        "ButtonRequest_Warning": 18
                                                    }
                                                }
                                            }
                                        },
                                        "ButtonAck": {
                                            "fields": {}
                                        },
                                        "PinMatrixRequest": {
                                            "fields": {
                                                "type": {
                                                    "type": "PinMatrixRequestType",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "PinMatrixRequestType": {
                                                    "values": {
                                                        "PinMatrixRequestType_Current": 1,
                                                        "PinMatrixRequestType_NewFirst": 2,
                                                        "PinMatrixRequestType_NewSecond": 3,
                                                        "PinMatrixRequestType_WipeCodeFirst": 4,
                                                        "PinMatrixRequestType_WipeCodeSecond": 5
                                                    }
                                                }
                                            }
                                        },
                                        "PinMatrixAck": {
                                            "fields": {
                                                "pin": {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "PassphraseRequest": {
                                            "fields": {
                                                "on_device": {
                                                    "type": "bool",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "PassphraseAck": {
                                            "fields": {
                                                "passphrase": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "state": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "PassphraseStateRequest": {
                                            "fields": {
                                                "state": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "PassphraseStateAck": {
                                            "fields": {}
                                        },
                                        "HDNodeType": {
                                            "fields": {
                                                "depth": {
                                                    "rule": "required",
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "fingerprint": {
                                                    "rule": "required",
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "child_num": {
                                                    "rule": "required",
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "chain_code": {
                                                    "rule": "required",
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "private_key": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 6
                                                }
                                            }
                                        }
                                    }
                                },
                                "bootloader": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageBootloader"
                                    },
                                    "nested": {
                                        "FirmwareErase": {
                                            "fields": {
                                                "length": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "FirmwareRequest": {
                                            "fields": {
                                                "offset": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "length": {
                                                    "type": "uint32",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "FirmwareUpload": {
                                            "fields": {
                                                "payload": {
                                                    "rule": "required",
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "hash": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "SelfTest": {
                                            "fields": {
                                                "payload": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                },
                                "cardano": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageCardano"
                                    },
                                    "nested": {
                                        "CardanoGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "CardanoAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "CardanoGetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "CardanoPublicKey": {
                                            "fields": {
                                                "xpub": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "node": {
                                                    "type": "hw.trezor.messages.common.HDNodeType",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "CardanoSignTx": {
                                            "fields": {
                                                "inputs": {
                                                    "rule": "repeated",
                                                    "type": "CardanoTxInputType",
                                                    "id": 1
                                                },
                                                "outputs": {
                                                    "rule": "repeated",
                                                    "type": "CardanoTxOutputType",
                                                    "id": 2
                                                },
                                                "transactions_count": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "protocol_magic": {
                                                    "type": "uint32",
                                                    "id": 5
                                                }
                                            },
                                            "nested": {
                                                "CardanoTxInputType": {
                                                    "fields": {
                                                        "address_n": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 1,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        },
                                                        "prev_hash": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "prev_index": {
                                                            "type": "uint32",
                                                            "id": 3
                                                        },
                                                        "type": {
                                                            "type": "uint32",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "CardanoTxOutputType": {
                                                    "fields": {
                                                        "address": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "address_n": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 2,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        },
                                                        "amount": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "CardanoTxRequest": {
                                            "fields": {
                                                "tx_index": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "tx_hash": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "tx_body": {
                                                    "type": "bytes",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "CardanoTxAck": {
                                            "fields": {
                                                "transaction": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "CardanoSignedTx": {
                                            "fields": {
                                                "tx_hash": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "tx_body": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        }
                                    }
                                },
                                "crypto": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageCrypto"
                                    },
                                    "nested": {
                                        "CipherKeyValue": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "key": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "value": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "encrypt": {
                                                    "type": "bool",
                                                    "id": 4
                                                },
                                                "ask_on_encrypt": {
                                                    "type": "bool",
                                                    "id": 5
                                                },
                                                "ask_on_decrypt": {
                                                    "type": "bool",
                                                    "id": 6
                                                },
                                                "iv": {
                                                    "type": "bytes",
                                                    "id": 7
                                                }
                                            }
                                        },
                                        "CipheredKeyValue": {
                                            "fields": {
                                                "value": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "IdentityType": {
                                            "fields": {
                                                "proto": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "user": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "host": {
                                                    "type": "string",
                                                    "id": 3
                                                },
                                                "port": {
                                                    "type": "string",
                                                    "id": 4
                                                },
                                                "path": {
                                                    "type": "string",
                                                    "id": 5
                                                },
                                                "index": {
                                                    "type": "uint32",
                                                    "id": 6,
                                                    "options": {
                                                        "default": 0
                                                    }
                                                }
                                            }
                                        },
                                        "SignIdentity": {
                                            "fields": {
                                                "identity": {
                                                    "type": "IdentityType",
                                                    "id": 1
                                                },
                                                "challenge_hidden": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "challenge_visual": {
                                                    "type": "string",
                                                    "id": 3
                                                },
                                                "ecdsa_curve_name": {
                                                    "type": "string",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "SignedIdentity": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "GetECDHSessionKey": {
                                            "fields": {
                                                "identity": {
                                                    "type": "IdentityType",
                                                    "id": 1
                                                },
                                                "peer_public_key": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "ecdsa_curve_name": {
                                                    "type": "string",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "ECDHSessionKey": {
                                            "fields": {
                                                "session_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "CosiCommit": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "data": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "CosiCommitment": {
                                            "fields": {
                                                "commitment": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "pubkey": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "CosiSign": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "data": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "global_commitment": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "global_pubkey": {
                                                    "type": "bytes",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "CosiSignature": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                },
                                "debug": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageDebug"
                                    },
                                    "nested": {
                                        "DebugLinkDecision": {
                                            "fields": {
                                                "yes_no": {
                                                    "type": "bool",
                                                    "id": 1
                                                },
                                                "swipe": {
                                                    "type": "DebugSwipeDirection",
                                                    "id": 2
                                                },
                                                "input": {
                                                    "type": "string",
                                                    "id": 3
                                                },
                                                "x": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "y": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "wait": {
                                                    "type": "bool",
                                                    "id": 6
                                                }
                                            },
                                            "nested": {
                                                "DebugSwipeDirection": {
                                                    "values": {
                                                        "UP": 0,
                                                        "DOWN": 1,
                                                        "LEFT": 2,
                                                        "RIGHT": 3
                                                    }
                                                }
                                            }
                                        },
                                        "DebugLinkLayout": {
                                            "fields": {
                                                "lines": {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "DebugLinkReseedRandom": {
                                            "fields": {
                                                "value": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "DebugLinkRecordScreen": {
                                            "fields": {
                                                "target_directory": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "DebugLinkGetState": {
                                            "fields": {
                                                "wait_word_list": {
                                                    "type": "bool",
                                                    "id": 1
                                                },
                                                "wait_word_pos": {
                                                    "type": "bool",
                                                    "id": 2
                                                },
                                                "wait_layout": {
                                                    "type": "bool",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "DebugLinkState": {
                                            "fields": {
                                                "layout": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "pin": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "matrix": {
                                                    "type": "string",
                                                    "id": 3
                                                },
                                                "mnemonic_secret": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "node": {
                                                    "type": "hw.trezor.messages.common.HDNodeType",
                                                    "id": 5
                                                },
                                                "passphrase_protection": {
                                                    "type": "bool",
                                                    "id": 6
                                                },
                                                "reset_word": {
                                                    "type": "string",
                                                    "id": 7
                                                },
                                                "reset_entropy": {
                                                    "type": "bytes",
                                                    "id": 8
                                                },
                                                "recovery_fake_word": {
                                                    "type": "string",
                                                    "id": 9
                                                },
                                                "recovery_word_pos": {
                                                    "type": "uint32",
                                                    "id": 10
                                                },
                                                "reset_word_pos": {
                                                    "type": "uint32",
                                                    "id": 11
                                                },
                                                "mnemonic_type": {
                                                    "type": "uint32",
                                                    "id": 12
                                                },
                                                "layout_lines": {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "id": 13
                                                }
                                            }
                                        },
                                        "DebugLinkStop": {
                                            "fields": {}
                                        },
                                        "DebugLinkLog": {
                                            "fields": {
                                                "level": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "bucket": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "text": {
                                                    "type": "string",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "DebugLinkMemoryRead": {
                                            "fields": {
                                                "address": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "length": {
                                                    "type": "uint32",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "DebugLinkMemory": {
                                            "fields": {
                                                "memory": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "DebugLinkMemoryWrite": {
                                            "fields": {
                                                "address": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "memory": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "flash": {
                                                    "type": "bool",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "DebugLinkFlashErase": {
                                            "fields": {
                                                "sector": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                },
                                "eos": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageEos"
                                    },
                                    "nested": {
                                        "EosGetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EosPublicKey": {
                                            "fields": {
                                                "wif_public_key": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "raw_public_key": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EosSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "chain_id": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "header": {
                                                    "type": "EosTxHeader",
                                                    "id": 3
                                                },
                                                "num_actions": {
                                                    "type": "uint32",
                                                    "id": 4
                                                }
                                            },
                                            "nested": {
                                                "EosTxHeader": {
                                                    "fields": {
                                                        "expiration": {
                                                            "rule": "required",
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "ref_block_num": {
                                                            "rule": "required",
                                                            "type": "uint32",
                                                            "id": 2
                                                        },
                                                        "ref_block_prefix": {
                                                            "rule": "required",
                                                            "type": "uint32",
                                                            "id": 3
                                                        },
                                                        "max_net_usage_words": {
                                                            "rule": "required",
                                                            "type": "uint32",
                                                            "id": 4
                                                        },
                                                        "max_cpu_usage_ms": {
                                                            "rule": "required",
                                                            "type": "uint32",
                                                            "id": 5
                                                        },
                                                        "delay_sec": {
                                                            "rule": "required",
                                                            "type": "uint32",
                                                            "id": 6
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "EosTxActionRequest": {
                                            "fields": {
                                                "data_size": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "EosTxActionAck": {
                                            "fields": {
                                                "common": {
                                                    "type": "EosActionCommon",
                                                    "id": 1
                                                },
                                                "transfer": {
                                                    "type": "EosActionTransfer",
                                                    "id": 2
                                                },
                                                "delegate": {
                                                    "type": "EosActionDelegate",
                                                    "id": 3
                                                },
                                                "undelegate": {
                                                    "type": "EosActionUndelegate",
                                                    "id": 4
                                                },
                                                "refund": {
                                                    "type": "EosActionRefund",
                                                    "id": 5
                                                },
                                                "buy_ram": {
                                                    "type": "EosActionBuyRam",
                                                    "id": 6
                                                },
                                                "buy_ram_bytes": {
                                                    "type": "EosActionBuyRamBytes",
                                                    "id": 7
                                                },
                                                "sell_ram": {
                                                    "type": "EosActionSellRam",
                                                    "id": 8
                                                },
                                                "vote_producer": {
                                                    "type": "EosActionVoteProducer",
                                                    "id": 9
                                                },
                                                "update_auth": {
                                                    "type": "EosActionUpdateAuth",
                                                    "id": 10
                                                },
                                                "delete_auth": {
                                                    "type": "EosActionDeleteAuth",
                                                    "id": 11
                                                },
                                                "link_auth": {
                                                    "type": "EosActionLinkAuth",
                                                    "id": 12
                                                },
                                                "unlink_auth": {
                                                    "type": "EosActionUnlinkAuth",
                                                    "id": 13
                                                },
                                                "new_account": {
                                                    "type": "EosActionNewAccount",
                                                    "id": 14
                                                },
                                                "unknown": {
                                                    "type": "EosActionUnknown",
                                                    "id": 15
                                                }
                                            },
                                            "nested": {
                                                "EosAsset": {
                                                    "fields": {
                                                        "amount": {
                                                            "type": "sint64",
                                                            "id": 1
                                                        },
                                                        "symbol": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "EosPermissionLevel": {
                                                    "fields": {
                                                        "actor": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "permission": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "EosAuthorizationKey": {
                                                    "fields": {
                                                        "type": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "key": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "address_n": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 3,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        },
                                                        "weight": {
                                                            "type": "uint32",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosAuthorizationAccount": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "EosPermissionLevel",
                                                            "id": 1
                                                        },
                                                        "weight": {
                                                            "type": "uint32",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "EosAuthorizationWait": {
                                                    "fields": {
                                                        "wait_sec": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "weight": {
                                                            "type": "uint32",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "EosAuthorization": {
                                                    "fields": {
                                                        "threshold": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "keys": {
                                                            "rule": "repeated",
                                                            "type": "EosAuthorizationKey",
                                                            "id": 2
                                                        },
                                                        "accounts": {
                                                            "rule": "repeated",
                                                            "type": "EosAuthorizationAccount",
                                                            "id": 3
                                                        },
                                                        "waits": {
                                                            "rule": "repeated",
                                                            "type": "EosAuthorizationWait",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosActionCommon": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "name": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "authorization": {
                                                            "rule": "repeated",
                                                            "type": "EosPermissionLevel",
                                                            "id": 3
                                                        }
                                                    }
                                                },
                                                "EosActionTransfer": {
                                                    "fields": {
                                                        "sender": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "receiver": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "quantity": {
                                                            "type": "EosAsset",
                                                            "id": 3
                                                        },
                                                        "memo": {
                                                            "type": "string",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosActionDelegate": {
                                                    "fields": {
                                                        "sender": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "receiver": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "net_quantity": {
                                                            "type": "EosAsset",
                                                            "id": 3
                                                        },
                                                        "cpu_quantity": {
                                                            "type": "EosAsset",
                                                            "id": 4
                                                        },
                                                        "transfer": {
                                                            "type": "bool",
                                                            "id": 5
                                                        }
                                                    }
                                                },
                                                "EosActionUndelegate": {
                                                    "fields": {
                                                        "sender": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "receiver": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "net_quantity": {
                                                            "type": "EosAsset",
                                                            "id": 3
                                                        },
                                                        "cpu_quantity": {
                                                            "type": "EosAsset",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosActionRefund": {
                                                    "fields": {
                                                        "owner": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        }
                                                    }
                                                },
                                                "EosActionBuyRam": {
                                                    "fields": {
                                                        "payer": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "receiver": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "quantity": {
                                                            "type": "EosAsset",
                                                            "id": 3
                                                        }
                                                    }
                                                },
                                                "EosActionBuyRamBytes": {
                                                    "fields": {
                                                        "payer": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "receiver": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "bytes": {
                                                            "type": "uint32",
                                                            "id": 3
                                                        }
                                                    }
                                                },
                                                "EosActionSellRam": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "bytes": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "EosActionVoteProducer": {
                                                    "fields": {
                                                        "voter": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "proxy": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "producers": {
                                                            "rule": "repeated",
                                                            "type": "uint64",
                                                            "id": 3,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        }
                                                    }
                                                },
                                                "EosActionUpdateAuth": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "permission": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "parent": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "auth": {
                                                            "type": "EosAuthorization",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosActionDeleteAuth": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "permission": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "EosActionLinkAuth": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "code": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "type": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "requirement": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosActionUnlinkAuth": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "code": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "type": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        }
                                                    }
                                                },
                                                "EosActionNewAccount": {
                                                    "fields": {
                                                        "creator": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "name": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "owner": {
                                                            "type": "EosAuthorization",
                                                            "id": 3
                                                        },
                                                        "active": {
                                                            "type": "EosAuthorization",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "EosActionUnknown": {
                                                    "fields": {
                                                        "data_size": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "data_chunk": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "EosSignedTx": {
                                            "fields": {
                                                "signature": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                },
                                "ethereum": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageEthereum"
                                    },
                                    "nested": {
                                        "EthereumGetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EthereumPublicKey": {
                                            "fields": {
                                                "node": {
                                                    "type": "hw.trezor.messages.common.HDNodeType",
                                                    "id": 1
                                                },
                                                "xpub": {
                                                    "type": "string",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EthereumGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EthereumAddress": {
                                            "fields": {
                                                "old_address": {
                                                    "type": "bytes",
                                                    "id": 1,
                                                    "options": {
                                                        "deprecated": true
                                                    }
                                                },
                                                "address": {
                                                    "type": "string",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EthereumSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "nonce": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "gas_price": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "gas_limit": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "to": {
                                                    "type": "string",
                                                    "id": 11
                                                },
                                                "value": {
                                                    "type": "bytes",
                                                    "id": 6
                                                },
                                                "data_initial_chunk": {
                                                    "type": "bytes",
                                                    "id": 7
                                                },
                                                "data_length": {
                                                    "type": "uint32",
                                                    "id": 8
                                                },
                                                "chain_id": {
                                                    "type": "uint32",
                                                    "id": 9
                                                },
                                                "tx_type": {
                                                    "type": "uint32",
                                                    "id": 10
                                                }
                                            }
                                        },
                                        "EthereumTxRequest": {
                                            "fields": {
                                                "data_length": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "signature_v": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "signature_r": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "signature_s": {
                                                    "type": "bytes",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "EthereumTxAck": {
                                            "fields": {
                                                "data_chunk": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "EthereumSignMessage": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "message": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "EthereumMessageSignature": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "address": {
                                                    "type": "string",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "EthereumVerifyMessage": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "message": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "address": {
                                                    "type": "string",
                                                    "id": 4
                                                }
                                            }
                                        }
                                    }
                                },
                                "lisk": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageLisk"
                                    },
                                    "nested": {
                                        "LiskGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "LiskAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "LiskGetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "LiskPublicKey": {
                                            "fields": {
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "LiskSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "transaction": {
                                                    "type": "LiskTransactionCommon",
                                                    "id": 2
                                                }
                                            },
                                            "nested": {
                                                "LiskTransactionCommon": {
                                                    "fields": {
                                                        "type": {
                                                            "type": "LiskTransactionType",
                                                            "id": 1
                                                        },
                                                        "amount": {
                                                            "type": "uint64",
                                                            "id": 2,
                                                            "options": {
                                                                "default": 0
                                                            }
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "recipient_id": {
                                                            "type": "string",
                                                            "id": 4
                                                        },
                                                        "sender_public_key": {
                                                            "type": "bytes",
                                                            "id": 5
                                                        },
                                                        "requester_public_key": {
                                                            "type": "bytes",
                                                            "id": 6
                                                        },
                                                        "signature": {
                                                            "type": "bytes",
                                                            "id": 7
                                                        },
                                                        "timestamp": {
                                                            "type": "uint32",
                                                            "id": 8
                                                        },
                                                        "asset": {
                                                            "type": "LiskTransactionAsset",
                                                            "id": 9
                                                        }
                                                    },
                                                    "nested": {
                                                        "LiskTransactionType": {
                                                            "values": {
                                                                "Transfer": 0,
                                                                "RegisterSecondPassphrase": 1,
                                                                "RegisterDelegate": 2,
                                                                "CastVotes": 3,
                                                                "RegisterMultisignatureAccount": 4,
                                                                "CreateDapp": 5,
                                                                "TransferIntoDapp": 6,
                                                                "TransferOutOfDapp": 7
                                                            }
                                                        },
                                                        "LiskTransactionAsset": {
                                                            "fields": {
                                                                "signature": {
                                                                    "type": "LiskSignatureType",
                                                                    "id": 1
                                                                },
                                                                "delegate": {
                                                                    "type": "LiskDelegateType",
                                                                    "id": 2
                                                                },
                                                                "votes": {
                                                                    "rule": "repeated",
                                                                    "type": "string",
                                                                    "id": 3
                                                                },
                                                                "multisignature": {
                                                                    "type": "LiskMultisignatureType",
                                                                    "id": 4
                                                                },
                                                                "data": {
                                                                    "type": "string",
                                                                    "id": 5
                                                                }
                                                            },
                                                            "nested": {
                                                                "LiskSignatureType": {
                                                                    "fields": {
                                                                        "public_key": {
                                                                            "type": "bytes",
                                                                            "id": 1
                                                                        }
                                                                    }
                                                                },
                                                                "LiskDelegateType": {
                                                                    "fields": {
                                                                        "username": {
                                                                            "type": "string",
                                                                            "id": 1
                                                                        }
                                                                    }
                                                                },
                                                                "LiskMultisignatureType": {
                                                                    "fields": {
                                                                        "min": {
                                                                            "type": "uint32",
                                                                            "id": 1
                                                                        },
                                                                        "life_time": {
                                                                            "type": "uint32",
                                                                            "id": 2
                                                                        },
                                                                        "keys_group": {
                                                                            "rule": "repeated",
                                                                            "type": "string",
                                                                            "id": 3
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "LiskSignedTx": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "LiskSignMessage": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "message": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "LiskMessageSignature": {
                                            "fields": {
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "LiskVerifyMessage": {
                                            "fields": {
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "message": {
                                                    "type": "bytes",
                                                    "id": 3
                                                }
                                            }
                                        }
                                    }
                                },
                                "management": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageManagement"
                                    },
                                    "nested": {
                                        "BackupType": {
                                            "values": {
                                                "Bip39": 0,
                                                "Slip39_Basic": 1,
                                                "Slip39_Advanced": 2
                                            }
                                        },
                                        "Initialize": {
                                            "fields": {
                                                "state": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "skip_passphrase": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "GetFeatures": {
                                            "fields": {}
                                        },
                                        "Features": {
                                            "fields": {
                                                "vendor": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "major_version": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "minor_version": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "patch_version": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "bootloader_mode": {
                                                    "type": "bool",
                                                    "id": 5
                                                },
                                                "device_id": {
                                                    "type": "string",
                                                    "id": 6
                                                },
                                                "pin_protection": {
                                                    "type": "bool",
                                                    "id": 7
                                                },
                                                "passphrase_protection": {
                                                    "type": "bool",
                                                    "id": 8
                                                },
                                                "language": {
                                                    "type": "string",
                                                    "id": 9
                                                },
                                                "label": {
                                                    "type": "string",
                                                    "id": 10
                                                },
                                                "initialized": {
                                                    "type": "bool",
                                                    "id": 12
                                                },
                                                "revision": {
                                                    "type": "bytes",
                                                    "id": 13
                                                },
                                                "bootloader_hash": {
                                                    "type": "bytes",
                                                    "id": 14
                                                },
                                                "imported": {
                                                    "type": "bool",
                                                    "id": 15
                                                },
                                                "pin_cached": {
                                                    "type": "bool",
                                                    "id": 16
                                                },
                                                "passphrase_cached": {
                                                    "type": "bool",
                                                    "id": 17
                                                },
                                                "firmware_present": {
                                                    "type": "bool",
                                                    "id": 18
                                                },
                                                "needs_backup": {
                                                    "type": "bool",
                                                    "id": 19
                                                },
                                                "flags": {
                                                    "type": "uint32",
                                                    "id": 20
                                                },
                                                "model": {
                                                    "type": "string",
                                                    "id": 21
                                                },
                                                "fw_major": {
                                                    "type": "uint32",
                                                    "id": 22
                                                },
                                                "fw_minor": {
                                                    "type": "uint32",
                                                    "id": 23
                                                },
                                                "fw_patch": {
                                                    "type": "uint32",
                                                    "id": 24
                                                },
                                                "fw_vendor": {
                                                    "type": "string",
                                                    "id": 25
                                                },
                                                "fw_vendor_keys": {
                                                    "type": "bytes",
                                                    "id": 26
                                                },
                                                "unfinished_backup": {
                                                    "type": "bool",
                                                    "id": 27
                                                },
                                                "no_backup": {
                                                    "type": "bool",
                                                    "id": 28
                                                },
                                                "recovery_mode": {
                                                    "type": "bool",
                                                    "id": 29
                                                },
                                                "capabilities": {
                                                    "rule": "repeated",
                                                    "type": "Capability",
                                                    "id": 30,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "backup_type": {
                                                    "type": "BackupType",
                                                    "id": 31
                                                },
                                                "sd_card_present": {
                                                    "type": "bool",
                                                    "id": 32
                                                },
                                                "sd_protection": {
                                                    "type": "bool",
                                                    "id": 33
                                                },
                                                "wipe_code_protection": {
                                                    "type": "bool",
                                                    "id": 34
                                                }
                                            },
                                            "nested": {
                                                "Capability": {
                                                    "values": {
                                                        "Capability_Bitcoin": 1,
                                                        "Capability_Bitcoin_like": 2,
                                                        "Capability_Binance": 3,
                                                        "Capability_Cardano": 4,
                                                        "Capability_Crypto": 5,
                                                        "Capability_EOS": 6,
                                                        "Capability_Ethereum": 7,
                                                        "Capability_Lisk": 8,
                                                        "Capability_Monero": 9,
                                                        "Capability_NEM": 10,
                                                        "Capability_Ripple": 11,
                                                        "Capability_Stellar": 12,
                                                        "Capability_Tezos": 13,
                                                        "Capability_U2F": 14,
                                                        "Capability_Shamir": 15,
                                                        "Capability_ShamirGroups": 16
                                                    }
                                                }
                                            }
                                        },
                                        "ClearSession": {
                                            "fields": {}
                                        },
                                        "ApplySettings": {
                                            "fields": {
                                                "language": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "label": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "use_passphrase": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "homescreen": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "passphrase_source": {
                                                    "type": "PassphraseSourceType",
                                                    "id": 5
                                                },
                                                "auto_lock_delay_ms": {
                                                    "type": "uint32",
                                                    "id": 6
                                                },
                                                "display_rotation": {
                                                    "type": "uint32",
                                                    "id": 7
                                                }
                                            },
                                            "nested": {
                                                "PassphraseSourceType": {
                                                    "values": {
                                                        "ASK": 0,
                                                        "DEVICE": 1,
                                                        "HOST": 2
                                                    }
                                                }
                                            }
                                        },
                                        "ApplyFlags": {
                                            "fields": {
                                                "flags": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ChangePin": {
                                            "fields": {
                                                "remove": {
                                                    "type": "bool",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ChangeWipeCode": {
                                            "fields": {
                                                "remove": {
                                                    "type": "bool",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "SdProtect": {
                                            "fields": {
                                                "operation": {
                                                    "type": "SdProtectOperationType",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "SdProtectOperationType": {
                                                    "values": {
                                                        "DISABLE": 0,
                                                        "ENABLE": 1,
                                                        "REFRESH": 2
                                                    }
                                                }
                                            }
                                        },
                                        "Ping": {
                                            "fields": {
                                                "message": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "button_protection": {
                                                    "type": "bool",
                                                    "id": 2
                                                },
                                                "pin_protection": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "passphrase_protection": {
                                                    "type": "bool",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "Cancel": {
                                            "fields": {}
                                        },
                                        "GetEntropy": {
                                            "fields": {
                                                "size": {
                                                    "rule": "required",
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "Entropy": {
                                            "fields": {
                                                "entropy": {
                                                    "rule": "required",
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "WipeDevice": {
                                            "fields": {}
                                        },
                                        "LoadDevice": {
                                            "fields": {
                                                "mnemonics": {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "pin": {
                                                    "type": "string",
                                                    "id": 3
                                                },
                                                "passphrase_protection": {
                                                    "type": "bool",
                                                    "id": 4
                                                },
                                                "language": {
                                                    "type": "string",
                                                    "id": 5,
                                                    "options": {
                                                        "default": "en-US"
                                                    }
                                                },
                                                "label": {
                                                    "type": "string",
                                                    "id": 6
                                                },
                                                "skip_checksum": {
                                                    "type": "bool",
                                                    "id": 7
                                                },
                                                "u2f_counter": {
                                                    "type": "uint32",
                                                    "id": 8
                                                },
                                                "needs_backup": {
                                                    "type": "bool",
                                                    "id": 9
                                                },
                                                "no_backup": {
                                                    "type": "bool",
                                                    "id": 10
                                                }
                                            }
                                        },
                                        "ResetDevice": {
                                            "fields": {
                                                "display_random": {
                                                    "type": "bool",
                                                    "id": 1
                                                },
                                                "strength": {
                                                    "type": "uint32",
                                                    "id": 2,
                                                    "options": {
                                                        "default": 256
                                                    }
                                                },
                                                "passphrase_protection": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "pin_protection": {
                                                    "type": "bool",
                                                    "id": 4
                                                },
                                                "language": {
                                                    "type": "string",
                                                    "id": 5,
                                                    "options": {
                                                        "default": "en-US"
                                                    }
                                                },
                                                "label": {
                                                    "type": "string",
                                                    "id": 6
                                                },
                                                "u2f_counter": {
                                                    "type": "uint32",
                                                    "id": 7
                                                },
                                                "skip_backup": {
                                                    "type": "bool",
                                                    "id": 8
                                                },
                                                "no_backup": {
                                                    "type": "bool",
                                                    "id": 9
                                                },
                                                "backup_type": {
                                                    "type": "BackupType",
                                                    "id": 10,
                                                    "options": {
                                                        "default": "Bip39"
                                                    }
                                                }
                                            }
                                        },
                                        "BackupDevice": {
                                            "fields": {}
                                        },
                                        "EntropyRequest": {
                                            "fields": {}
                                        },
                                        "EntropyAck": {
                                            "fields": {
                                                "entropy": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "RecoveryDevice": {
                                            "fields": {
                                                "word_count": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "passphrase_protection": {
                                                    "type": "bool",
                                                    "id": 2
                                                },
                                                "pin_protection": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "language": {
                                                    "type": "string",
                                                    "id": 4,
                                                    "options": {
                                                        "default": "en-US"
                                                    }
                                                },
                                                "label": {
                                                    "type": "string",
                                                    "id": 5
                                                },
                                                "enforce_wordlist": {
                                                    "type": "bool",
                                                    "id": 6
                                                },
                                                "type": {
                                                    "type": "RecoveryDeviceType",
                                                    "id": 8
                                                },
                                                "u2f_counter": {
                                                    "type": "uint32",
                                                    "id": 9
                                                },
                                                "dry_run": {
                                                    "type": "bool",
                                                    "id": 10
                                                }
                                            },
                                            "nested": {
                                                "RecoveryDeviceType": {
                                                    "values": {
                                                        "RecoveryDeviceType_ScrambledWords": 0,
                                                        "RecoveryDeviceType_Matrix": 1
                                                    }
                                                }
                                            }
                                        },
                                        "WordRequest": {
                                            "fields": {
                                                "type": {
                                                    "type": "WordRequestType",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "WordRequestType": {
                                                    "values": {
                                                        "WordRequestType_Plain": 0,
                                                        "WordRequestType_Matrix9": 1,
                                                        "WordRequestType_Matrix6": 2
                                                    }
                                                }
                                            }
                                        },
                                        "WordAck": {
                                            "fields": {
                                                "word": {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "SetU2FCounter": {
                                            "fields": {
                                                "u2f_counter": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "GetNextU2FCounter": {
                                            "fields": {}
                                        },
                                        "NextU2FCounter": {
                                            "fields": {
                                                "u2f_counter": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                },
                                "monero": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageMonero"
                                    },
                                    "nested": {
                                        "MoneroTransactionSourceEntry": {
                                            "fields": {
                                                "outputs": {
                                                    "rule": "repeated",
                                                    "type": "MoneroOutputEntry",
                                                    "id": 1
                                                },
                                                "real_output": {
                                                    "type": "uint64",
                                                    "id": 2
                                                },
                                                "real_out_tx_key": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "real_out_additional_tx_keys": {
                                                    "rule": "repeated",
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "real_output_in_tx_index": {
                                                    "type": "uint64",
                                                    "id": 5
                                                },
                                                "amount": {
                                                    "type": "uint64",
                                                    "id": 6
                                                },
                                                "rct": {
                                                    "type": "bool",
                                                    "id": 7
                                                },
                                                "mask": {
                                                    "type": "bytes",
                                                    "id": 8
                                                },
                                                "multisig_kLRki": {
                                                    "type": "MoneroMultisigKLRki",
                                                    "id": 9
                                                },
                                                "subaddr_minor": {
                                                    "type": "uint32",
                                                    "id": 10
                                                }
                                            },
                                            "nested": {
                                                "MoneroOutputEntry": {
                                                    "fields": {
                                                        "idx": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "key": {
                                                            "type": "MoneroRctKeyPublic",
                                                            "id": 2
                                                        }
                                                    },
                                                    "nested": {
                                                        "MoneroRctKeyPublic": {
                                                            "fields": {
                                                                "dest": {
                                                                    "type": "bytes",
                                                                    "id": 1
                                                                },
                                                                "commitment": {
                                                                    "type": "bytes",
                                                                    "id": 2
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "MoneroMultisigKLRki": {
                                                    "fields": {
                                                        "K": {
                                                            "type": "bytes",
                                                            "id": 1
                                                        },
                                                        "L": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "R": {
                                                            "type": "bytes",
                                                            "id": 3
                                                        },
                                                        "ki": {
                                                            "type": "bytes",
                                                            "id": 4
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroTransactionDestinationEntry": {
                                            "fields": {
                                                "amount": {
                                                    "type": "uint64",
                                                    "id": 1
                                                },
                                                "addr": {
                                                    "type": "MoneroAccountPublicAddress",
                                                    "id": 2
                                                },
                                                "is_subaddress": {
                                                    "type": "bool",
                                                    "id": 3
                                                },
                                                "original": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "is_integrated": {
                                                    "type": "bool",
                                                    "id": 5
                                                }
                                            },
                                            "nested": {
                                                "MoneroAccountPublicAddress": {
                                                    "fields": {
                                                        "spend_public_key": {
                                                            "type": "bytes",
                                                            "id": 1
                                                        },
                                                        "view_public_key": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroTransactionRsigData": {
                                            "fields": {
                                                "rsig_type": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "offload_type": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "grouping": {
                                                    "rule": "repeated",
                                                    "type": "uint64",
                                                    "id": 3,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "mask": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "rsig": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "rsig_parts": {
                                                    "rule": "repeated",
                                                    "type": "bytes",
                                                    "id": 6
                                                },
                                                "bp_version": {
                                                    "type": "uint32",
                                                    "id": 7
                                                }
                                            }
                                        },
                                        "MoneroGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                },
                                                "network_type": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "account": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "minor": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "payment_id": {
                                                    "type": "bytes",
                                                    "id": 6
                                                }
                                            }
                                        },
                                        "MoneroAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "MoneroGetWatchKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network_type": {
                                                    "type": "uint32",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "MoneroWatchKey": {
                                            "fields": {
                                                "watch_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "address": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "MoneroTransactionInitRequest": {
                                            "fields": {
                                                "version": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 2,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network_type": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "tsx_data": {
                                                    "type": "MoneroTransactionData",
                                                    "id": 4
                                                }
                                            },
                                            "nested": {
                                                "MoneroTransactionData": {
                                                    "fields": {
                                                        "version": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "payment_id": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "unlock_time": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "outputs": {
                                                            "rule": "repeated",
                                                            "type": "MoneroTransactionDestinationEntry",
                                                            "id": 4
                                                        },
                                                        "change_dts": {
                                                            "type": "MoneroTransactionDestinationEntry",
                                                            "id": 5
                                                        },
                                                        "num_inputs": {
                                                            "type": "uint32",
                                                            "id": 6
                                                        },
                                                        "mixin": {
                                                            "type": "uint32",
                                                            "id": 7
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 8
                                                        },
                                                        "account": {
                                                            "type": "uint32",
                                                            "id": 9
                                                        },
                                                        "minor_indices": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 10,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        },
                                                        "rsig_data": {
                                                            "type": "MoneroTransactionRsigData",
                                                            "id": 11
                                                        },
                                                        "integrated_indices": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 12,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        },
                                                        "client_version": {
                                                            "type": "uint32",
                                                            "id": 13
                                                        },
                                                        "hard_fork": {
                                                            "type": "uint32",
                                                            "id": 14
                                                        },
                                                        "monero_version": {
                                                            "type": "bytes",
                                                            "id": 15
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroTransactionInitAck": {
                                            "fields": {
                                                "hmacs": {
                                                    "rule": "repeated",
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "rsig_data": {
                                                    "type": "MoneroTransactionRsigData",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "MoneroTransactionSetInputRequest": {
                                            "fields": {
                                                "src_entr": {
                                                    "type": "MoneroTransactionSourceEntry",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "MoneroTransactionSetInputAck": {
                                            "fields": {
                                                "vini": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "vini_hmac": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "pseudo_out": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "pseudo_out_hmac": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "pseudo_out_alpha": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "spend_key": {
                                                    "type": "bytes",
                                                    "id": 6
                                                }
                                            }
                                        },
                                        "MoneroTransactionInputsPermutationRequest": {
                                            "fields": {
                                                "perm": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroTransactionInputsPermutationAck": {
                                            "fields": {}
                                        },
                                        "MoneroTransactionInputViniRequest": {
                                            "fields": {
                                                "src_entr": {
                                                    "type": "MoneroTransactionSourceEntry",
                                                    "id": 1
                                                },
                                                "vini": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "vini_hmac": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "pseudo_out": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "pseudo_out_hmac": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "orig_idx": {
                                                    "type": "uint32",
                                                    "id": 6
                                                }
                                            }
                                        },
                                        "MoneroTransactionInputViniAck": {
                                            "fields": {}
                                        },
                                        "MoneroTransactionAllInputsSetRequest": {
                                            "fields": {}
                                        },
                                        "MoneroTransactionAllInputsSetAck": {
                                            "fields": {
                                                "rsig_data": {
                                                    "type": "MoneroTransactionRsigData",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "MoneroTransactionSetOutputRequest": {
                                            "fields": {
                                                "dst_entr": {
                                                    "type": "MoneroTransactionDestinationEntry",
                                                    "id": 1
                                                },
                                                "dst_entr_hmac": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "rsig_data": {
                                                    "type": "MoneroTransactionRsigData",
                                                    "id": 3
                                                },
                                                "is_offloaded_bp": {
                                                    "type": "bool",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "MoneroTransactionSetOutputAck": {
                                            "fields": {
                                                "tx_out": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "vouti_hmac": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "rsig_data": {
                                                    "type": "MoneroTransactionRsigData",
                                                    "id": 3
                                                },
                                                "out_pk": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "ecdh_info": {
                                                    "type": "bytes",
                                                    "id": 5
                                                }
                                            }
                                        },
                                        "MoneroTransactionAllOutSetRequest": {
                                            "fields": {
                                                "rsig_data": {
                                                    "type": "MoneroTransactionRsigData",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "MoneroTransactionAllOutSetAck": {
                                            "fields": {
                                                "extra": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "tx_prefix_hash": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "rv": {
                                                    "type": "MoneroRingCtSig",
                                                    "id": 4
                                                },
                                                "full_message_hash": {
                                                    "type": "bytes",
                                                    "id": 5
                                                }
                                            },
                                            "nested": {
                                                "MoneroRingCtSig": {
                                                    "fields": {
                                                        "txn_fee": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "message": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "rv_type": {
                                                            "type": "uint32",
                                                            "id": 3
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroTransactionSignInputRequest": {
                                            "fields": {
                                                "src_entr": {
                                                    "type": "MoneroTransactionSourceEntry",
                                                    "id": 1
                                                },
                                                "vini": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "vini_hmac": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "pseudo_out": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "pseudo_out_hmac": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "pseudo_out_alpha": {
                                                    "type": "bytes",
                                                    "id": 6
                                                },
                                                "spend_key": {
                                                    "type": "bytes",
                                                    "id": 7
                                                },
                                                "orig_idx": {
                                                    "type": "uint32",
                                                    "id": 8
                                                }
                                            }
                                        },
                                        "MoneroTransactionSignInputAck": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "pseudo_out": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "MoneroTransactionFinalRequest": {
                                            "fields": {}
                                        },
                                        "MoneroTransactionFinalAck": {
                                            "fields": {
                                                "cout_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "salt": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "rand_mult": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "tx_enc_keys": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "opening_key": {
                                                    "type": "bytes",
                                                    "id": 5
                                                }
                                            }
                                        },
                                        "MoneroKeyImageExportInitRequest": {
                                            "fields": {
                                                "num": {
                                                    "type": "uint64",
                                                    "id": 1
                                                },
                                                "hash": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 3,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network_type": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "subs": {
                                                    "rule": "repeated",
                                                    "type": "MoneroSubAddressIndicesList",
                                                    "id": 5
                                                }
                                            },
                                            "nested": {
                                                "MoneroSubAddressIndicesList": {
                                                    "fields": {
                                                        "account": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "minor_indices": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 2,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroKeyImageExportInitAck": {
                                            "fields": {}
                                        },
                                        "MoneroKeyImageSyncStepRequest": {
                                            "fields": {
                                                "tdis": {
                                                    "rule": "repeated",
                                                    "type": "MoneroTransferDetails",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "MoneroTransferDetails": {
                                                    "fields": {
                                                        "out_key": {
                                                            "type": "bytes",
                                                            "id": 1
                                                        },
                                                        "tx_pub_key": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "additional_tx_pub_keys": {
                                                            "rule": "repeated",
                                                            "type": "bytes",
                                                            "id": 3
                                                        },
                                                        "internal_output_index": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroKeyImageSyncStepAck": {
                                            "fields": {
                                                "kis": {
                                                    "rule": "repeated",
                                                    "type": "MoneroExportedKeyImage",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "MoneroExportedKeyImage": {
                                                    "fields": {
                                                        "iv": {
                                                            "type": "bytes",
                                                            "id": 1
                                                        },
                                                        "blob": {
                                                            "type": "bytes",
                                                            "id": 3
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "MoneroKeyImageSyncFinalRequest": {
                                            "fields": {}
                                        },
                                        "MoneroKeyImageSyncFinalAck": {
                                            "fields": {
                                                "enc_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "MoneroGetTxKeyRequest": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network_type": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "salt1": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "salt2": {
                                                    "type": "bytes",
                                                    "id": 4
                                                },
                                                "tx_enc_keys": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "tx_prefix_hash": {
                                                    "type": "bytes",
                                                    "id": 6
                                                },
                                                "reason": {
                                                    "type": "uint32",
                                                    "id": 7
                                                },
                                                "view_public_key": {
                                                    "type": "bytes",
                                                    "id": 8
                                                }
                                            }
                                        },
                                        "MoneroGetTxKeyAck": {
                                            "fields": {
                                                "salt": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "tx_keys": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "tx_derivations": {
                                                    "type": "bytes",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "MoneroLiveRefreshStartRequest": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network_type": {
                                                    "type": "uint32",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "MoneroLiveRefreshStartAck": {
                                            "fields": {}
                                        },
                                        "MoneroLiveRefreshStepRequest": {
                                            "fields": {
                                                "out_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "recv_deriv": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "real_out_idx": {
                                                    "type": "uint64",
                                                    "id": 3
                                                },
                                                "sub_addr_major": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "sub_addr_minor": {
                                                    "type": "uint32",
                                                    "id": 5
                                                }
                                            }
                                        },
                                        "MoneroLiveRefreshStepAck": {
                                            "fields": {
                                                "salt": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "key_image": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "MoneroLiveRefreshFinalRequest": {
                                            "fields": {}
                                        },
                                        "MoneroLiveRefreshFinalAck": {
                                            "fields": {}
                                        },
                                        "DebugMoneroDiagRequest": {
                                            "fields": {
                                                "ins": {
                                                    "type": "uint64",
                                                    "id": 1
                                                },
                                                "p1": {
                                                    "type": "uint64",
                                                    "id": 2
                                                },
                                                "p2": {
                                                    "type": "uint64",
                                                    "id": 3
                                                },
                                                "pd": {
                                                    "rule": "repeated",
                                                    "type": "uint64",
                                                    "id": 4,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "data1": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "data2": {
                                                    "type": "bytes",
                                                    "id": 6
                                                }
                                            }
                                        },
                                        "DebugMoneroDiagAck": {
                                            "fields": {
                                                "ins": {
                                                    "type": "uint64",
                                                    "id": 1
                                                },
                                                "p1": {
                                                    "type": "uint64",
                                                    "id": 2
                                                },
                                                "p2": {
                                                    "type": "uint64",
                                                    "id": 3
                                                },
                                                "pd": {
                                                    "rule": "repeated",
                                                    "type": "uint64",
                                                    "id": 4,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "data1": {
                                                    "type": "bytes",
                                                    "id": 5
                                                },
                                                "data2": {
                                                    "type": "bytes",
                                                    "id": 6
                                                }
                                            }
                                        }
                                    }
                                },
                                "nem": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageNem"
                                    },
                                    "nested": {
                                        "NEMGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "NEMAddress": {
                                            "fields": {
                                                "address": {
                                                    "rule": "required",
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "NEMSignTx": {
                                            "fields": {
                                                "transaction": {
                                                    "type": "NEMTransactionCommon",
                                                    "id": 1
                                                },
                                                "multisig": {
                                                    "type": "NEMTransactionCommon",
                                                    "id": 2
                                                },
                                                "transfer": {
                                                    "type": "NEMTransfer",
                                                    "id": 3
                                                },
                                                "cosigning": {
                                                    "type": "bool",
                                                    "id": 4
                                                },
                                                "provision_namespace": {
                                                    "type": "NEMProvisionNamespace",
                                                    "id": 5
                                                },
                                                "mosaic_creation": {
                                                    "type": "NEMMosaicCreation",
                                                    "id": 6
                                                },
                                                "supply_change": {
                                                    "type": "NEMMosaicSupplyChange",
                                                    "id": 7
                                                },
                                                "aggregate_modification": {
                                                    "type": "NEMAggregateModification",
                                                    "id": 8
                                                },
                                                "importance_transfer": {
                                                    "type": "NEMImportanceTransfer",
                                                    "id": 9
                                                }
                                            },
                                            "nested": {
                                                "NEMTransactionCommon": {
                                                    "fields": {
                                                        "address_n": {
                                                            "rule": "repeated",
                                                            "type": "uint32",
                                                            "id": 1,
                                                            "options": {
                                                                "packed": false
                                                            }
                                                        },
                                                        "network": {
                                                            "type": "uint32",
                                                            "id": 2
                                                        },
                                                        "timestamp": {
                                                            "type": "uint32",
                                                            "id": 3
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        },
                                                        "deadline": {
                                                            "type": "uint32",
                                                            "id": 5
                                                        },
                                                        "signer": {
                                                            "type": "bytes",
                                                            "id": 6
                                                        }
                                                    }
                                                },
                                                "NEMTransfer": {
                                                    "fields": {
                                                        "recipient": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "amount": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "payload": {
                                                            "type": "bytes",
                                                            "id": 3
                                                        },
                                                        "public_key": {
                                                            "type": "bytes",
                                                            "id": 4
                                                        },
                                                        "mosaics": {
                                                            "rule": "repeated",
                                                            "type": "NEMMosaic",
                                                            "id": 5
                                                        }
                                                    },
                                                    "nested": {
                                                        "NEMMosaic": {
                                                            "fields": {
                                                                "namespace": {
                                                                    "type": "string",
                                                                    "id": 1
                                                                },
                                                                "mosaic": {
                                                                    "type": "string",
                                                                    "id": 2
                                                                },
                                                                "quantity": {
                                                                    "type": "uint64",
                                                                    "id": 3
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "NEMProvisionNamespace": {
                                                    "fields": {
                                                        "namespace": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "parent": {
                                                            "type": "string",
                                                            "id": 2
                                                        },
                                                        "sink": {
                                                            "type": "string",
                                                            "id": 3
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "NEMMosaicCreation": {
                                                    "fields": {
                                                        "definition": {
                                                            "type": "NEMMosaicDefinition",
                                                            "id": 1
                                                        },
                                                        "sink": {
                                                            "type": "string",
                                                            "id": 2
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        }
                                                    },
                                                    "nested": {
                                                        "NEMMosaicDefinition": {
                                                            "fields": {
                                                                "name": {
                                                                    "type": "string",
                                                                    "id": 1
                                                                },
                                                                "ticker": {
                                                                    "type": "string",
                                                                    "id": 2
                                                                },
                                                                "namespace": {
                                                                    "type": "string",
                                                                    "id": 3
                                                                },
                                                                "mosaic": {
                                                                    "type": "string",
                                                                    "id": 4
                                                                },
                                                                "divisibility": {
                                                                    "type": "uint32",
                                                                    "id": 5
                                                                },
                                                                "levy": {
                                                                    "type": "NEMMosaicLevy",
                                                                    "id": 6
                                                                },
                                                                "fee": {
                                                                    "type": "uint64",
                                                                    "id": 7
                                                                },
                                                                "levy_address": {
                                                                    "type": "string",
                                                                    "id": 8
                                                                },
                                                                "levy_namespace": {
                                                                    "type": "string",
                                                                    "id": 9
                                                                },
                                                                "levy_mosaic": {
                                                                    "type": "string",
                                                                    "id": 10
                                                                },
                                                                "supply": {
                                                                    "type": "uint64",
                                                                    "id": 11
                                                                },
                                                                "mutable_supply": {
                                                                    "type": "bool",
                                                                    "id": 12
                                                                },
                                                                "transferable": {
                                                                    "type": "bool",
                                                                    "id": 13
                                                                },
                                                                "description": {
                                                                    "type": "string",
                                                                    "id": 14
                                                                },
                                                                "networks": {
                                                                    "rule": "repeated",
                                                                    "type": "uint32",
                                                                    "id": 15,
                                                                    "options": {
                                                                        "packed": false
                                                                    }
                                                                }
                                                            },
                                                            "nested": {
                                                                "NEMMosaicLevy": {
                                                                    "values": {
                                                                        "MosaicLevy_Absolute": 1,
                                                                        "MosaicLevy_Percentile": 2
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "NEMMosaicSupplyChange": {
                                                    "fields": {
                                                        "namespace": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "mosaic": {
                                                            "type": "string",
                                                            "id": 2
                                                        },
                                                        "type": {
                                                            "type": "NEMSupplyChangeType",
                                                            "id": 3
                                                        },
                                                        "delta": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        }
                                                    },
                                                    "nested": {
                                                        "NEMSupplyChangeType": {
                                                            "values": {
                                                                "SupplyChange_Increase": 1,
                                                                "SupplyChange_Decrease": 2
                                                            }
                                                        }
                                                    }
                                                },
                                                "NEMAggregateModification": {
                                                    "fields": {
                                                        "modifications": {
                                                            "rule": "repeated",
                                                            "type": "NEMCosignatoryModification",
                                                            "id": 1
                                                        },
                                                        "relative_change": {
                                                            "type": "sint32",
                                                            "id": 2
                                                        }
                                                    },
                                                    "nested": {
                                                        "NEMCosignatoryModification": {
                                                            "fields": {
                                                                "type": {
                                                                    "type": "NEMModificationType",
                                                                    "id": 1
                                                                },
                                                                "public_key": {
                                                                    "type": "bytes",
                                                                    "id": 2
                                                                }
                                                            },
                                                            "nested": {
                                                                "NEMModificationType": {
                                                                    "values": {
                                                                        "CosignatoryModification_Add": 1,
                                                                        "CosignatoryModification_Delete": 2
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "NEMImportanceTransfer": {
                                                    "fields": {
                                                        "mode": {
                                                            "type": "NEMImportanceTransferMode",
                                                            "id": 1
                                                        },
                                                        "public_key": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        }
                                                    },
                                                    "nested": {
                                                        "NEMImportanceTransferMode": {
                                                            "values": {
                                                                "ImportanceTransfer_Activate": 1,
                                                                "ImportanceTransfer_Deactivate": 2
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "NEMSignedTx": {
                                            "fields": {
                                                "data": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "NEMDecryptMessage": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network": {
                                                    "type": "uint32",
                                                    "id": 2
                                                },
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 3
                                                },
                                                "payload": {
                                                    "type": "bytes",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "NEMDecryptedMessage": {
                                            "fields": {
                                                "payload": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                },
                                "ripple": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageRipple"
                                    },
                                    "nested": {
                                        "RippleGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "RippleAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "RippleSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "fee": {
                                                    "type": "uint64",
                                                    "id": 2
                                                },
                                                "flags": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "sequence": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "last_ledger_sequence": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "payment": {
                                                    "type": "RipplePayment",
                                                    "id": 6
                                                }
                                            },
                                            "nested": {
                                                "RipplePayment": {
                                                    "fields": {
                                                        "amount": {
                                                            "type": "uint64",
                                                            "id": 1
                                                        },
                                                        "destination": {
                                                            "type": "string",
                                                            "id": 2
                                                        },
                                                        "destination_tag": {
                                                            "type": "uint32",
                                                            "id": 3
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "RippleSignedTx": {
                                            "fields": {
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "serialized_tx": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        }
                                    }
                                },
                                "stellar": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageStellar"
                                    },
                                    "nested": {
                                        "StellarAssetType": {
                                            "fields": {
                                                "type": {
                                                    "type": "uint32",
                                                    "id": 1
                                                },
                                                "code": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "issuer": {
                                                    "type": "string",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "StellarGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "StellarAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "StellarSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 2,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "network_passphrase": {
                                                    "type": "string",
                                                    "id": 3
                                                },
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 4
                                                },
                                                "fee": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "sequence_number": {
                                                    "type": "uint64",
                                                    "id": 6
                                                },
                                                "timebounds_start": {
                                                    "type": "uint32",
                                                    "id": 8
                                                },
                                                "timebounds_end": {
                                                    "type": "uint32",
                                                    "id": 9
                                                },
                                                "memo_type": {
                                                    "type": "uint32",
                                                    "id": 10
                                                },
                                                "memo_text": {
                                                    "type": "string",
                                                    "id": 11
                                                },
                                                "memo_id": {
                                                    "type": "uint64",
                                                    "id": 12
                                                },
                                                "memo_hash": {
                                                    "type": "bytes",
                                                    "id": 13
                                                },
                                                "num_operations": {
                                                    "type": "uint32",
                                                    "id": 14
                                                }
                                            }
                                        },
                                        "StellarTxOpRequest": {
                                            "fields": {}
                                        },
                                        "StellarPaymentOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "destination_account": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 3
                                                },
                                                "amount": {
                                                    "type": "sint64",
                                                    "id": 4
                                                }
                                            }
                                        },
                                        "StellarCreateAccountOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "new_account": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "starting_balance": {
                                                    "type": "sint64",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "StellarPathPaymentOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "send_asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 2
                                                },
                                                "send_max": {
                                                    "type": "sint64",
                                                    "id": 3
                                                },
                                                "destination_account": {
                                                    "type": "string",
                                                    "id": 4
                                                },
                                                "destination_asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 5
                                                },
                                                "destination_amount": {
                                                    "type": "sint64",
                                                    "id": 6
                                                },
                                                "paths": {
                                                    "rule": "repeated",
                                                    "type": "StellarAssetType",
                                                    "id": 7
                                                }
                                            }
                                        },
                                        "StellarManageOfferOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "selling_asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 2
                                                },
                                                "buying_asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 3
                                                },
                                                "amount": {
                                                    "type": "sint64",
                                                    "id": 4
                                                },
                                                "price_n": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "price_d": {
                                                    "type": "uint32",
                                                    "id": 6
                                                },
                                                "offer_id": {
                                                    "type": "uint64",
                                                    "id": 7
                                                }
                                            }
                                        },
                                        "StellarCreatePassiveOfferOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "selling_asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 2
                                                },
                                                "buying_asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 3
                                                },
                                                "amount": {
                                                    "type": "sint64",
                                                    "id": 4
                                                },
                                                "price_n": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "price_d": {
                                                    "type": "uint32",
                                                    "id": 6
                                                }
                                            }
                                        },
                                        "StellarSetOptionsOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "inflation_destination_account": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "clear_flags": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "set_flags": {
                                                    "type": "uint32",
                                                    "id": 4
                                                },
                                                "master_weight": {
                                                    "type": "uint32",
                                                    "id": 5
                                                },
                                                "low_threshold": {
                                                    "type": "uint32",
                                                    "id": 6
                                                },
                                                "medium_threshold": {
                                                    "type": "uint32",
                                                    "id": 7
                                                },
                                                "high_threshold": {
                                                    "type": "uint32",
                                                    "id": 8
                                                },
                                                "home_domain": {
                                                    "type": "string",
                                                    "id": 9
                                                },
                                                "signer_type": {
                                                    "type": "uint32",
                                                    "id": 10
                                                },
                                                "signer_key": {
                                                    "type": "bytes",
                                                    "id": 11
                                                },
                                                "signer_weight": {
                                                    "type": "uint32",
                                                    "id": 12
                                                }
                                            }
                                        },
                                        "StellarChangeTrustOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "asset": {
                                                    "type": "StellarAssetType",
                                                    "id": 2
                                                },
                                                "limit": {
                                                    "type": "uint64",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "StellarAllowTrustOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "trusted_account": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "asset_type": {
                                                    "type": "uint32",
                                                    "id": 3
                                                },
                                                "asset_code": {
                                                    "type": "string",
                                                    "id": 4
                                                },
                                                "is_authorized": {
                                                    "type": "uint32",
                                                    "id": 5
                                                }
                                            }
                                        },
                                        "StellarAccountMergeOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "destination_account": {
                                                    "type": "string",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "StellarManageDataOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "key": {
                                                    "type": "string",
                                                    "id": 2
                                                },
                                                "value": {
                                                    "type": "bytes",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "StellarBumpSequenceOp": {
                                            "fields": {
                                                "source_account": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "bump_to": {
                                                    "type": "uint64",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "StellarSignedTx": {
                                            "fields": {
                                                "public_key": {
                                                    "type": "bytes",
                                                    "id": 1
                                                },
                                                "signature": {
                                                    "type": "bytes",
                                                    "id": 2
                                                }
                                            }
                                        }
                                    }
                                },
                                "tezos": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageTezos"
                                    },
                                    "nested": {
                                        "TezosGetAddress": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "TezosAddress": {
                                            "fields": {
                                                "address": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "TezosGetPublicKey": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "show_display": {
                                                    "type": "bool",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "TezosPublicKey": {
                                            "fields": {
                                                "public_key": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "TezosSignTx": {
                                            "fields": {
                                                "address_n": {
                                                    "rule": "repeated",
                                                    "type": "uint32",
                                                    "id": 1,
                                                    "options": {
                                                        "packed": false
                                                    }
                                                },
                                                "branch": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "reveal": {
                                                    "type": "TezosRevealOp",
                                                    "id": 3
                                                },
                                                "transaction": {
                                                    "type": "TezosTransactionOp",
                                                    "id": 4
                                                },
                                                "origination": {
                                                    "type": "TezosOriginationOp",
                                                    "id": 5
                                                },
                                                "delegation": {
                                                    "type": "TezosDelegationOp",
                                                    "id": 6
                                                },
                                                "proposal": {
                                                    "type": "TezosProposalOp",
                                                    "id": 7
                                                },
                                                "ballot": {
                                                    "type": "TezosBallotOp",
                                                    "id": 8
                                                }
                                            },
                                            "nested": {
                                                "TezosContractID": {
                                                    "fields": {
                                                        "tag": {
                                                            "type": "TezosContractType",
                                                            "id": 1
                                                        },
                                                        "hash": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        }
                                                    },
                                                    "nested": {
                                                        "TezosContractType": {
                                                            "values": {
                                                                "Implicit": 0,
                                                                "Originated": 1
                                                            }
                                                        }
                                                    }
                                                },
                                                "TezosRevealOp": {
                                                    "fields": {
                                                        "source": {
                                                            "type": "bytes",
                                                            "id": 7
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "counter": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "gas_limit": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        },
                                                        "storage_limit": {
                                                            "type": "uint64",
                                                            "id": 5
                                                        },
                                                        "public_key": {
                                                            "type": "bytes",
                                                            "id": 6
                                                        }
                                                    }
                                                },
                                                "TezosTransactionOp": {
                                                    "fields": {
                                                        "source": {
                                                            "type": "bytes",
                                                            "id": 9
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "counter": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "gas_limit": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        },
                                                        "storage_limit": {
                                                            "type": "uint64",
                                                            "id": 5
                                                        },
                                                        "amount": {
                                                            "type": "uint64",
                                                            "id": 6
                                                        },
                                                        "destination": {
                                                            "type": "TezosContractID",
                                                            "id": 7
                                                        },
                                                        "parameters": {
                                                            "type": "bytes",
                                                            "id": 8
                                                        },
                                                        "parameters_manager": {
                                                            "type": "TezosParametersManager",
                                                            "id": 10
                                                        }
                                                    },
                                                    "nested": {
                                                        "TezosParametersManager": {
                                                            "fields": {
                                                                "set_delegate": {
                                                                    "type": "bytes",
                                                                    "id": 1
                                                                },
                                                                "cancel_delegate": {
                                                                    "type": "bool",
                                                                    "id": 2
                                                                },
                                                                "transfer": {
                                                                    "type": "TezosManagerTransfer",
                                                                    "id": 3
                                                                }
                                                            },
                                                            "nested": {
                                                                "TezosManagerTransfer": {
                                                                    "fields": {
                                                                        "destination": {
                                                                            "type": "TezosContractID",
                                                                            "id": 1
                                                                        },
                                                                        "amount": {
                                                                            "type": "uint64",
                                                                            "id": 2
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "TezosOriginationOp": {
                                                    "fields": {
                                                        "source": {
                                                            "type": "bytes",
                                                            "id": 12
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "counter": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "gas_limit": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        },
                                                        "storage_limit": {
                                                            "type": "uint64",
                                                            "id": 5
                                                        },
                                                        "manager_pubkey": {
                                                            "type": "bytes",
                                                            "id": 6
                                                        },
                                                        "balance": {
                                                            "type": "uint64",
                                                            "id": 7
                                                        },
                                                        "spendable": {
                                                            "type": "bool",
                                                            "id": 8
                                                        },
                                                        "delegatable": {
                                                            "type": "bool",
                                                            "id": 9
                                                        },
                                                        "delegate": {
                                                            "type": "bytes",
                                                            "id": 10
                                                        },
                                                        "script": {
                                                            "type": "bytes",
                                                            "id": 11
                                                        }
                                                    }
                                                },
                                                "TezosDelegationOp": {
                                                    "fields": {
                                                        "source": {
                                                            "type": "bytes",
                                                            "id": 7
                                                        },
                                                        "fee": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "counter": {
                                                            "type": "uint64",
                                                            "id": 3
                                                        },
                                                        "gas_limit": {
                                                            "type": "uint64",
                                                            "id": 4
                                                        },
                                                        "storage_limit": {
                                                            "type": "uint64",
                                                            "id": 5
                                                        },
                                                        "delegate": {
                                                            "type": "bytes",
                                                            "id": 6
                                                        }
                                                    }
                                                },
                                                "TezosProposalOp": {
                                                    "fields": {
                                                        "source": {
                                                            "type": "bytes",
                                                            "id": 1
                                                        },
                                                        "period": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "proposals": {
                                                            "rule": "repeated",
                                                            "type": "bytes",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "TezosBallotOp": {
                                                    "fields": {
                                                        "source": {
                                                            "type": "bytes",
                                                            "id": 1
                                                        },
                                                        "period": {
                                                            "type": "uint64",
                                                            "id": 2
                                                        },
                                                        "proposal": {
                                                            "type": "bytes",
                                                            "id": 3
                                                        },
                                                        "ballot": {
                                                            "type": "TezosBallotType",
                                                            "id": 4
                                                        }
                                                    },
                                                    "nested": {
                                                        "TezosBallotType": {
                                                            "values": {
                                                                "Yay": 0,
                                                                "Nay": 1,
                                                                "Pass": 2
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "TezosSignedTx": {
                                            "fields": {
                                                "signature": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "sig_op_contents": {
                                                    "type": "bytes",
                                                    "id": 2
                                                },
                                                "operation_hash": {
                                                    "type": "string",
                                                    "id": 3
                                                }
                                            }
                                        }
                                    }
                                },
                                "webauthn": {
                                    "options": {
                                        "java_package": "com.satoshilabs.trezor.lib.protobuf",
                                        "java_outer_classname": "TrezorMessageWebAuthn"
                                    },
                                    "nested": {
                                        "WebAuthnListResidentCredentials": {
                                            "fields": {}
                                        },
                                        "WebAuthnAddResidentCredential": {
                                            "fields": {
                                                "credential_id": {
                                                    "type": "bytes",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "WebAuthnRemoveResidentCredential": {
                                            "fields": {
                                                "index": {
                                                    "type": "uint32",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "WebAuthnCredentials": {
                                            "fields": {
                                                "credentials": {
                                                    "rule": "repeated",
                                                    "type": "WebAuthnCredential",
                                                    "id": 1
                                                }
                                            },
                                            "nested": {
                                                "WebAuthnCredential": {
                                                    "fields": {
                                                        "index": {
                                                            "type": "uint32",
                                                            "id": 1
                                                        },
                                                        "id": {
                                                            "type": "bytes",
                                                            "id": 2
                                                        },
                                                        "rp_id": {
                                                            "type": "string",
                                                            "id": 3
                                                        },
                                                        "rp_name": {
                                                            "type": "string",
                                                            "id": 4
                                                        },
                                                        "user_id": {
                                                            "type": "bytes",
                                                            "id": 5
                                                        },
                                                        "user_name": {
                                                            "type": "string",
                                                            "id": 6
                                                        },
                                                        "user_display_name": {
                                                            "type": "string",
                                                            "id": 7
                                                        },
                                                        "creation_time": {
                                                            "type": "uint32",
                                                            "id": 8
                                                        },
                                                        "hmac_secret": {
                                                            "type": "bool",
                                                            "id": 9
                                                        },
                                                        "use_sign_count": {
                                                            "type": "bool",
                                                            "id": 10
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "wire_in": {
                                    "type": "bool",
                                    "id": 50002,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "wire_out": {
                                    "type": "bool",
                                    "id": 50003,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "wire_debug_in": {
                                    "type": "bool",
                                    "id": 50004,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "wire_debug_out": {
                                    "type": "bool",
                                    "id": 50005,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "wire_tiny": {
                                    "type": "bool",
                                    "id": 50006,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "wire_bootloader": {
                                    "type": "bool",
                                    "id": 50007,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "wire_no_fsm": {
                                    "type": "bool",
                                    "id": 50008,
                                    "extend": "google.protobuf.EnumValueOptions"
                                },
                                "MessageType": {
                                    "values": {
                                        "Initialize": 0,
                                        "Ping": 1,
                                        "Success": 2,
                                        "Failure": 3,
                                        "ChangePin": 4,
                                        "WipeDevice": 5,
                                        "GetEntropy": 9,
                                        "Entropy": 10,
                                        "LoadDevice": 13,
                                        "ResetDevice": 14,
                                        "Features": 17,
                                        "PinMatrixRequest": 18,
                                        "PinMatrixAck": 19,
                                        "Cancel": 20,
                                        "ClearSession": 24,
                                        "ApplySettings": 25,
                                        "ButtonRequest": 26,
                                        "ButtonAck": 27,
                                        "ApplyFlags": 28,
                                        "BackupDevice": 34,
                                        "EntropyRequest": 35,
                                        "EntropyAck": 36,
                                        "PassphraseRequest": 41,
                                        "PassphraseAck": 42,
                                        "PassphraseStateRequest": 77,
                                        "PassphraseStateAck": 78,
                                        "RecoveryDevice": 45,
                                        "WordRequest": 46,
                                        "WordAck": 47,
                                        "GetFeatures": 55,
                                        "SetU2FCounter": 63,
                                        "SdProtect": 79,
                                        "GetNextU2FCounter": 80,
                                        "NextU2FCounter": 81,
                                        "ChangeWipeCode": 82,
                                        "FirmwareErase": 6,
                                        "FirmwareUpload": 7,
                                        "FirmwareRequest": 8,
                                        "SelfTest": 32,
                                        "GetPublicKey": 11,
                                        "PublicKey": 12,
                                        "SignTx": 15,
                                        "TxRequest": 21,
                                        "TxAck": 22,
                                        "GetAddress": 29,
                                        "Address": 30,
                                        "SignMessage": 38,
                                        "VerifyMessage": 39,
                                        "MessageSignature": 40,
                                        "CipherKeyValue": 23,
                                        "CipheredKeyValue": 48,
                                        "SignIdentity": 53,
                                        "SignedIdentity": 54,
                                        "GetECDHSessionKey": 61,
                                        "ECDHSessionKey": 62,
                                        "CosiCommit": 71,
                                        "CosiCommitment": 72,
                                        "CosiSign": 73,
                                        "CosiSignature": 74,
                                        "DebugLinkDecision": 100,
                                        "DebugLinkGetState": 101,
                                        "DebugLinkState": 102,
                                        "DebugLinkStop": 103,
                                        "DebugLinkLog": 104,
                                        "DebugLinkMemoryRead": 110,
                                        "DebugLinkMemory": 111,
                                        "DebugLinkMemoryWrite": 112,
                                        "DebugLinkFlashErase": 113,
                                        "DebugLinkLayout": 9001,
                                        "DebugLinkReseedRandom": 9002,
                                        "DebugLinkRecordScreen": 9003,
                                        "EthereumGetPublicKey": 450,
                                        "EthereumPublicKey": 451,
                                        "EthereumGetAddress": 56,
                                        "EthereumAddress": 57,
                                        "EthereumSignTx": 58,
                                        "EthereumTxRequest": 59,
                                        "EthereumTxAck": 60,
                                        "EthereumSignMessage": 64,
                                        "EthereumVerifyMessage": 65,
                                        "EthereumMessageSignature": 66,
                                        "NEMGetAddress": 67,
                                        "NEMAddress": 68,
                                        "NEMSignTx": 69,
                                        "NEMSignedTx": 70,
                                        "NEMDecryptMessage": 75,
                                        "NEMDecryptedMessage": 76,
                                        "LiskGetAddress": 114,
                                        "LiskAddress": 115,
                                        "LiskSignTx": 116,
                                        "LiskSignedTx": 117,
                                        "LiskSignMessage": 118,
                                        "LiskMessageSignature": 119,
                                        "LiskVerifyMessage": 120,
                                        "LiskGetPublicKey": 121,
                                        "LiskPublicKey": 122,
                                        "TezosGetAddress": 150,
                                        "TezosAddress": 151,
                                        "TezosSignTx": 152,
                                        "TezosSignedTx": 153,
                                        "TezosGetPublicKey": 154,
                                        "TezosPublicKey": 155,
                                        "StellarSignTx": 202,
                                        "StellarTxOpRequest": 203,
                                        "StellarGetAddress": 207,
                                        "StellarAddress": 208,
                                        "StellarCreateAccountOp": 210,
                                        "StellarPaymentOp": 211,
                                        "StellarPathPaymentOp": 212,
                                        "StellarManageOfferOp": 213,
                                        "StellarCreatePassiveOfferOp": 214,
                                        "StellarSetOptionsOp": 215,
                                        "StellarChangeTrustOp": 216,
                                        "StellarAllowTrustOp": 217,
                                        "StellarAccountMergeOp": 218,
                                        "StellarManageDataOp": 220,
                                        "StellarBumpSequenceOp": 221,
                                        "StellarSignedTx": 230,
                                        "CardanoSignTx": 303,
                                        "CardanoTxRequest": 304,
                                        "CardanoGetPublicKey": 305,
                                        "CardanoPublicKey": 306,
                                        "CardanoGetAddress": 307,
                                        "CardanoAddress": 308,
                                        "CardanoTxAck": 309,
                                        "CardanoSignedTx": 310,
                                        "RippleGetAddress": 400,
                                        "RippleAddress": 401,
                                        "RippleSignTx": 402,
                                        "RippleSignedTx": 403,
                                        "MoneroTransactionInitRequest": 501,
                                        "MoneroTransactionInitAck": 502,
                                        "MoneroTransactionSetInputRequest": 503,
                                        "MoneroTransactionSetInputAck": 504,
                                        "MoneroTransactionInputsPermutationRequest": 505,
                                        "MoneroTransactionInputsPermutationAck": 506,
                                        "MoneroTransactionInputViniRequest": 507,
                                        "MoneroTransactionInputViniAck": 508,
                                        "MoneroTransactionAllInputsSetRequest": 509,
                                        "MoneroTransactionAllInputsSetAck": 510,
                                        "MoneroTransactionSetOutputRequest": 511,
                                        "MoneroTransactionSetOutputAck": 512,
                                        "MoneroTransactionAllOutSetRequest": 513,
                                        "MoneroTransactionAllOutSetAck": 514,
                                        "MoneroTransactionSignInputRequest": 515,
                                        "MoneroTransactionSignInputAck": 516,
                                        "MoneroTransactionFinalRequest": 517,
                                        "MoneroTransactionFinalAck": 518,
                                        "MoneroKeyImageExportInitRequest": 530,
                                        "MoneroKeyImageExportInitAck": 531,
                                        "MoneroKeyImageSyncStepRequest": 532,
                                        "MoneroKeyImageSyncStepAck": 533,
                                        "MoneroKeyImageSyncFinalRequest": 534,
                                        "MoneroKeyImageSyncFinalAck": 535,
                                        "MoneroGetAddress": 540,
                                        "MoneroAddress": 541,
                                        "MoneroGetWatchKey": 542,
                                        "MoneroWatchKey": 543,
                                        "DebugMoneroDiagRequest": 546,
                                        "DebugMoneroDiagAck": 547,
                                        "MoneroGetTxKeyRequest": 550,
                                        "MoneroGetTxKeyAck": 551,
                                        "MoneroLiveRefreshStartRequest": 552,
                                        "MoneroLiveRefreshStartAck": 553,
                                        "MoneroLiveRefreshStepRequest": 554,
                                        "MoneroLiveRefreshStepAck": 555,
                                        "MoneroLiveRefreshFinalRequest": 556,
                                        "MoneroLiveRefreshFinalAck": 557,
                                        "EosGetPublicKey": 600,
                                        "EosPublicKey": 601,
                                        "EosSignTx": 602,
                                        "EosTxActionRequest": 603,
                                        "EosTxActionAck": 604,
                                        "EosSignedTx": 605,
                                        "BinanceGetAddress": 700,
                                        "BinanceAddress": 701,
                                        "BinanceGetPublicKey": 702,
                                        "BinancePublicKey": 703,
                                        "BinanceSignTx": 704,
                                        "BinanceTxRequest": 705,
                                        "BinanceTransferMsg": 706,
                                        "BinanceOrderMsg": 707,
                                        "BinanceCancelMsg": 708,
                                        "BinanceSignedTx": 709,
                                        "WebAuthnListResidentCredentials": 800,
                                        "WebAuthnCredentials": 801,
                                        "WebAuthnAddResidentCredential": 802,
                                        "WebAuthnRemoveResidentCredential": 803
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "google": {
            "nested": {
                "protobuf": {
                    "nested": {
                        "FileDescriptorSet": {
                            "fields": {
                                "file": {
                                    "rule": "repeated",
                                    "type": "FileDescriptorProto",
                                    "id": 1
                                }
                            }
                        },
                        "FileDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "package": {
                                    "type": "string",
                                    "id": 2
                                },
                                "dependency": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 3
                                },
                                "public_dependency": {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "id": 10,
                                    "options": {
                                        "packed": false
                                    }
                                },
                                "weak_dependency": {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "id": 11,
                                    "options": {
                                        "packed": false
                                    }
                                },
                                "message_type": {
                                    "rule": "repeated",
                                    "type": "DescriptorProto",
                                    "id": 4
                                },
                                "enum_type": {
                                    "rule": "repeated",
                                    "type": "EnumDescriptorProto",
                                    "id": 5
                                },
                                "service": {
                                    "rule": "repeated",
                                    "type": "ServiceDescriptorProto",
                                    "id": 6
                                },
                                "extension": {
                                    "rule": "repeated",
                                    "type": "FieldDescriptorProto",
                                    "id": 7
                                },
                                "options": {
                                    "type": "FileOptions",
                                    "id": 8
                                },
                                "source_code_info": {
                                    "type": "SourceCodeInfo",
                                    "id": 9
                                },
                                "syntax": {
                                    "type": "string",
                                    "id": 12
                                }
                            }
                        },
                        "DescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "field": {
                                    "rule": "repeated",
                                    "type": "FieldDescriptorProto",
                                    "id": 2
                                },
                                "extension": {
                                    "rule": "repeated",
                                    "type": "FieldDescriptorProto",
                                    "id": 6
                                },
                                "nested_type": {
                                    "rule": "repeated",
                                    "type": "DescriptorProto",
                                    "id": 3
                                },
                                "enum_type": {
                                    "rule": "repeated",
                                    "type": "EnumDescriptorProto",
                                    "id": 4
                                },
                                "extension_range": {
                                    "rule": "repeated",
                                    "type": "ExtensionRange",
                                    "id": 5
                                },
                                "oneof_decl": {
                                    "rule": "repeated",
                                    "type": "OneofDescriptorProto",
                                    "id": 8
                                },
                                "options": {
                                    "type": "MessageOptions",
                                    "id": 7
                                },
                                "reserved_range": {
                                    "rule": "repeated",
                                    "type": "ReservedRange",
                                    "id": 9
                                },
                                "reserved_name": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 10
                                }
                            },
                            "nested": {
                                "ExtensionRange": {
                                    "fields": {
                                        "start": {
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "end": {
                                            "type": "int32",
                                            "id": 2
                                        }
                                    }
                                },
                                "ReservedRange": {
                                    "fields": {
                                        "start": {
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "end": {
                                            "type": "int32",
                                            "id": 2
                                        }
                                    }
                                }
                            }
                        },
                        "FieldDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "number": {
                                    "type": "int32",
                                    "id": 3
                                },
                                "label": {
                                    "type": "Label",
                                    "id": 4
                                },
                                "type": {
                                    "type": "Type",
                                    "id": 5
                                },
                                "type_name": {
                                    "type": "string",
                                    "id": 6
                                },
                                "extendee": {
                                    "type": "string",
                                    "id": 2
                                },
                                "default_value": {
                                    "type": "string",
                                    "id": 7
                                },
                                "oneof_index": {
                                    "type": "int32",
                                    "id": 9
                                },
                                "json_name": {
                                    "type": "string",
                                    "id": 10
                                },
                                "options": {
                                    "type": "FieldOptions",
                                    "id": 8
                                }
                            },
                            "nested": {
                                "Type": {
                                    "values": {
                                        "TYPE_DOUBLE": 1,
                                        "TYPE_FLOAT": 2,
                                        "TYPE_INT64": 3,
                                        "TYPE_UINT64": 4,
                                        "TYPE_INT32": 5,
                                        "TYPE_FIXED64": 6,
                                        "TYPE_FIXED32": 7,
                                        "TYPE_BOOL": 8,
                                        "TYPE_STRING": 9,
                                        "TYPE_GROUP": 10,
                                        "TYPE_MESSAGE": 11,
                                        "TYPE_BYTES": 12,
                                        "TYPE_UINT32": 13,
                                        "TYPE_ENUM": 14,
                                        "TYPE_SFIXED32": 15,
                                        "TYPE_SFIXED64": 16,
                                        "TYPE_SINT32": 17,
                                        "TYPE_SINT64": 18
                                    }
                                },
                                "Label": {
                                    "values": {
                                        "LABEL_OPTIONAL": 1,
                                        "LABEL_REQUIRED": 2,
                                        "LABEL_REPEATED": 3
                                    }
                                }
                            }
                        },
                        "OneofDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "options": {
                                    "type": "OneofOptions",
                                    "id": 2
                                }
                            }
                        },
                        "EnumDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "value": {
                                    "rule": "repeated",
                                    "type": "EnumValueDescriptorProto",
                                    "id": 2
                                },
                                "options": {
                                    "type": "EnumOptions",
                                    "id": 3
                                }
                            }
                        },
                        "EnumValueDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "number": {
                                    "type": "int32",
                                    "id": 2
                                },
                                "options": {
                                    "type": "EnumValueOptions",
                                    "id": 3
                                }
                            }
                        },
                        "ServiceDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "method": {
                                    "rule": "repeated",
                                    "type": "MethodDescriptorProto",
                                    "id": 2
                                },
                                "options": {
                                    "type": "ServiceOptions",
                                    "id": 3
                                }
                            }
                        },
                        "MethodDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "input_type": {
                                    "type": "string",
                                    "id": 2
                                },
                                "output_type": {
                                    "type": "string",
                                    "id": 3
                                },
                                "options": {
                                    "type": "MethodOptions",
                                    "id": 4
                                },
                                "client_streaming": {
                                    "type": "bool",
                                    "id": 5
                                },
                                "server_streaming": {
                                    "type": "bool",
                                    "id": 6
                                }
                            }
                        },
                        "FileOptions": {
                            "fields": {
                                "java_package": {
                                    "type": "string",
                                    "id": 1
                                },
                                "java_outer_classname": {
                                    "type": "string",
                                    "id": 8
                                },
                                "java_multiple_files": {
                                    "type": "bool",
                                    "id": 10
                                },
                                "java_generate_equals_and_hash": {
                                    "type": "bool",
                                    "id": 20,
                                    "options": {
                                        "deprecated": true
                                    }
                                },
                                "java_string_check_utf8": {
                                    "type": "bool",
                                    "id": 27
                                },
                                "optimize_for": {
                                    "type": "OptimizeMode",
                                    "id": 9,
                                    "options": {
                                        "default": "SPEED"
                                    }
                                },
                                "go_package": {
                                    "type": "string",
                                    "id": 11
                                },
                                "cc_generic_services": {
                                    "type": "bool",
                                    "id": 16
                                },
                                "java_generic_services": {
                                    "type": "bool",
                                    "id": 17
                                },
                                "py_generic_services": {
                                    "type": "bool",
                                    "id": 18
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 23
                                },
                                "cc_enable_arenas": {
                                    "type": "bool",
                                    "id": 31
                                },
                                "objc_class_prefix": {
                                    "type": "string",
                                    "id": 36
                                },
                                "csharp_namespace": {
                                    "type": "string",
                                    "id": 37
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ],
                            "reserved": [
                                [
                                    38,
                                    38
                                ]
                            ],
                            "nested": {
                                "OptimizeMode": {
                                    "values": {
                                        "SPEED": 1,
                                        "CODE_SIZE": 2,
                                        "LITE_RUNTIME": 3
                                    }
                                }
                            }
                        },
                        "MessageOptions": {
                            "fields": {
                                "message_set_wire_format": {
                                    "type": "bool",
                                    "id": 1
                                },
                                "no_standard_descriptor_accessor": {
                                    "type": "bool",
                                    "id": 2
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "map_entry": {
                                    "type": "bool",
                                    "id": 7
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ],
                            "reserved": [
                                [
                                    8,
                                    8
                                ]
                            ]
                        },
                        "FieldOptions": {
                            "fields": {
                                "ctype": {
                                    "type": "CType",
                                    "id": 1,
                                    "options": {
                                        "default": "STRING"
                                    }
                                },
                                "packed": {
                                    "type": "bool",
                                    "id": 2
                                },
                                "jstype": {
                                    "type": "JSType",
                                    "id": 6,
                                    "options": {
                                        "default": "JS_NORMAL"
                                    }
                                },
                                "lazy": {
                                    "type": "bool",
                                    "id": 5
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "weak": {
                                    "type": "bool",
                                    "id": 10
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ],
                            "reserved": [
                                [
                                    4,
                                    4
                                ]
                            ],
                            "nested": {
                                "CType": {
                                    "values": {
                                        "STRING": 0,
                                        "CORD": 1,
                                        "STRING_PIECE": 2
                                    }
                                },
                                "JSType": {
                                    "values": {
                                        "JS_NORMAL": 0,
                                        "JS_STRING": 1,
                                        "JS_NUMBER": 2
                                    }
                                }
                            }
                        },
                        "OneofOptions": {
                            "fields": {
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "EnumOptions": {
                            "fields": {
                                "allow_alias": {
                                    "type": "bool",
                                    "id": 2
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "EnumValueOptions": {
                            "fields": {
                                "deprecated": {
                                    "type": "bool",
                                    "id": 1
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "ServiceOptions": {
                            "fields": {
                                "deprecated": {
                                    "type": "bool",
                                    "id": 33
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "MethodOptions": {
                            "fields": {
                                "deprecated": {
                                    "type": "bool",
                                    "id": 33
                                },
                                "uninterpreted_option": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "UninterpretedOption": {
                            "fields": {
                                "name": {
                                    "rule": "repeated",
                                    "type": "NamePart",
                                    "id": 2
                                },
                                "identifier_value": {
                                    "type": "string",
                                    "id": 3
                                },
                                "positive_int_value": {
                                    "type": "uint64",
                                    "id": 4
                                },
                                "negative_int_value": {
                                    "type": "int64",
                                    "id": 5
                                },
                                "double_value": {
                                    "type": "double",
                                    "id": 6
                                },
                                "string_value": {
                                    "type": "bytes",
                                    "id": 7
                                },
                                "aggregate_value": {
                                    "type": "string",
                                    "id": 8
                                }
                            },
                            "nested": {
                                "NamePart": {
                                    "fields": {
                                        "name_part": {
                                            "rule": "required",
                                            "type": "string",
                                            "id": 1
                                        },
                                        "is_extension": {
                                            "rule": "required",
                                            "type": "bool",
                                            "id": 2
                                        }
                                    }
                                }
                            }
                        },
                        "SourceCodeInfo": {
                            "fields": {
                                "location": {
                                    "rule": "repeated",
                                    "type": "Location",
                                    "id": 1
                                }
                            },
                            "nested": {
                                "Location": {
                                    "fields": {
                                        "path": {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "span": {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "id": 2
                                        },
                                        "leading_comments": {
                                            "type": "string",
                                            "id": 3
                                        },
                                        "trailing_comments": {
                                            "type": "string",
                                            "id": 4
                                        },
                                        "leading_detached_comments": {
                                            "rule": "repeated",
                                            "type": "string",
                                            "id": 6
                                        }
                                    }
                                }
                            }
                        },
                        "GeneratedCodeInfo": {
                            "fields": {
                                "annotation": {
                                    "rule": "repeated",
                                    "type": "Annotation",
                                    "id": 1
                                }
                            },
                            "nested": {
                                "Annotation": {
                                    "fields": {
                                        "path": {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "source_file": {
                                            "type": "string",
                                            "id": 2
                                        },
                                        "begin": {
                                            "type": "int32",
                                            "id": 3
                                        },
                                        "end": {
                                            "type": "int32",
                                            "id": 4
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _0x53c1_json_1 = __importDefault(require("./0x53c1.json"));
var protocol_1 = __importDefault(require("./protocol"));
var P53c1 = (function () {
    function P53c1() {
    }
    P53c1.protocol = function () {
        return new protocol_1.default(this.json, this.conf);
    };
    P53c1.json = _0x53c1_json_1.default;
    P53c1.conf = {
        enumname: 'MessageType',
        headString: '?',
        flagString: '##'
    };
    P53c1.device = {
        vendorId: 0x1209,
        productId: 0x53C1
    };
    return P53c1;
}());
exports.default = P53c1;

},{"./0x53c1.json":1,"./protocol":7}],3:[function(require,module,exports){
module.exports={}

},{}],4:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _0xabc1_json_1 = __importDefault(require("./0xabc1.json"));
var protocol_1 = __importDefault(require("./protocol"));
var Pabc1 = (function () {
    function Pabc1() {
    }
    Pabc1.protocol = function () {
        return new protocol_1.default(this.json, this.conf);
    };
    Pabc1.json = _0xabc1_json_1.default;
    Pabc1.conf = {
        enumname: 'Types',
        headString: '$',
        flagString: '##'
    };
    Pabc1.device = {
        vendorId: 0x1209,
        productId: 0xABC1
    };
    return Pabc1;
}());
exports.default = Pabc1;

},{"./0xabc1.json":3,"./protocol":7}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logs = (function () {
    function Logs() {
    }
    Logs.add = function (title, data) {
        if (data === void 0) { data = ''; }
        var obj = { id: String(++Logs.id), time: new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''), title: title, data: data };
        Logs._dispatch(obj);
    };
    Logs.listen = function (cb) {
        Logs.subscribers.push(cb);
        return function () {
            var i = Logs.subscribers.indexOf(cb);
            if (i !== -1) {
                Logs.subscribers[i] = Logs.subscribers[Logs.subscribers.length - 1];
                Logs.subscribers.pop();
            }
        };
    };
    Logs._dispatch = function (log) {
        for (var i = 0; i < Logs.subscribers.length; i++) {
            try {
                Logs.subscribers[i](log);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    Logs.id = 0;
    Logs.subscribers = [];
    return Logs;
}());
exports.default = Logs;

},{}],6:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protobufjs_1 = __importDefault(require("protobufjs"));
var logs_1 = __importDefault(require("./logs"));
var Protobuf = (function () {
    function Protobuf(json) {
        this.__ROOT__ = protobufjs_1.default.Root.fromJSON(json);
    }
    Protobuf.prototype.encode = function (type, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var pb, msg;
            return __generator(this, function (_a) {
                pb = this.__ROOT__.lookupTypeOrEnum(type);
                msg = pb.create(data);
                logs_1.default.add('encode', { type: type, data: data });
                return [2, pb.encode(msg).finish()];
            });
        });
    };
    Protobuf.prototype.decode = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                msg = this.__ROOT__.lookupTypeOrEnum(type).decode(data).toJSON();
                logs_1.default.add('decode', { type: type, data: msg });
                return [2, { type: type, data: msg }];
            });
        });
    };
    Protobuf.prototype.lookupEnum = function (path, key) {
        return __awaiter(this, void 0, void 0, function () {
            var types;
            return __generator(this, function (_a) {
                types = this.__ROOT__.lookupEnum(path);
                if (typeof key === 'number')
                    return [2, types.valuesById[key]];
                if (typeof key === 'string')
                    return [2, types.values[key]];
                return [2];
            });
        });
    };
    return Protobuf;
}());
exports.default = Protobuf;

},{"./logs":5,"protobufjs":23}],7:[function(require,module,exports){
(function (Buffer){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protobuf_1 = __importDefault(require("./protobuf"));
var Protocol = (function () {
    function Protocol(json, options) {
        this.__MSG_HEAD_STRING__ = "$";
        this.__MSG_FLAG_STRING__ = "##";
        this.__MSG_BYTE__ = 64;
        this.__MSG_FLAG_BYTE__ = 2;
        this.__MSG_TYPE_BYTE__ = 2;
        this.__MSG_SIZE_BYTE__ = 4;
        this.__MSG_FLAG_START__ = 1;
        this.__MSG_TYPE_START__ = 3;
        this.__MSG_SIZE_START__ = 5;
        this.__MSG_DATA_START__ = 9;
        this.__OPTIONS__ = {
            enumname: 'Types',
            headString: '$',
            flagString: '##'
        };
        if (options && options.enumname)
            this.__OPTIONS__.enumname = options.enumname;
        if (options && options.headString)
            this.__MSG_HEAD_STRING__ = options.headString;
        if (options && options.flagString)
            this.__MSG_FLAG_STRING__ = options.flagString;
        this.__MSG_FLAG_BYTE__ = this.__MSG_FLAG_STRING__.length;
        this.__MSG_FLAG_START__ = this.__MSG_HEAD_STRING__.length;
        this.__MSG_TYPE_START__ = this.__MSG_FLAG_START__ + this.__MSG_FLAG_BYTE__;
        this.__MSG_SIZE_START__ = this.__MSG_TYPE_START__ + this.__MSG_TYPE_BYTE__;
        this.__MSG_DATA_START__ = this.__MSG_SIZE_START__ + this.__MSG_SIZE_BYTE__;
        this.__PROTOBUF__ = new protobuf_1.default(json);
    }
    Protocol.prototype.encode = function (type, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var typeInt, dataBuf, flagBuf, typeBuf, sizeBuf, bodyBuf, headBuf, pageNum, arrBuf, i, tempBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.__PROTOBUF__.lookupEnum(this.__OPTIONS__.enumname, type)];
                    case 1:
                        typeInt = _a.sent();
                        return [4, this.__PROTOBUF__.encode(type, data)];
                    case 2:
                        dataBuf = _a.sent();
                        dataBuf = Buffer.from(dataBuf);
                        flagBuf = Buffer.from(this.__MSG_FLAG_STRING__);
                        typeBuf = Buffer.alloc(this.__MSG_TYPE_BYTE__);
                        sizeBuf = Buffer.alloc(this.__MSG_SIZE_BYTE__);
                        typeBuf.writeUInt16BE(typeInt, 0);
                        sizeBuf.writeUInt32BE(dataBuf.length, 0);
                        bodyBuf = Buffer.concat([
                            flagBuf,
                            typeBuf,
                            sizeBuf,
                            dataBuf
                        ], this.__MSG_FLAG_BYTE__ +
                            this.__MSG_TYPE_BYTE__ +
                            this.__MSG_SIZE_BYTE__ +
                            dataBuf.length);
                        headBuf = Buffer.from(this.__MSG_HEAD_STRING__);
                        pageNum = Math.ceil(bodyBuf.length / (this.__MSG_BYTE__ - 1));
                        arrBuf = [];
                        for (i = 0; i < pageNum; i++) {
                            tempBuf = bodyBuf.slice(i * (this.__MSG_BYTE__ - 1), (i + 1) * (this.__MSG_BYTE__ - 1));
                            arrBuf.push(Buffer.concat([headBuf, tempBuf], this.__MSG_BYTE__));
                        }
                        return [2, arrBuf];
                }
            });
        });
    };
    Protocol.prototype.decode = function (arrBuf) {
        return __awaiter(this, void 0, void 0, function () {
            var typeBuf, sizeBuf, dataBuf, typeInt, sizeInt, typeStr, i, tempBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeBuf = Buffer.alloc(this.__MSG_TYPE_BYTE__);
                        sizeBuf = Buffer.alloc(this.__MSG_SIZE_BYTE__);
                        dataBuf = Buffer.alloc(0);
                        typeInt = -1;
                        sizeInt = -1;
                        typeStr = '';
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < arrBuf.length)) return [3, 5];
                        if (!this.hasHead(arrBuf[i]))
                            return [2];
                        if (!this.hasFlag(arrBuf[i])) return [3, 3];
                        typeBuf = arrBuf[i].slice(this.__MSG_TYPE_START__, this.__MSG_SIZE_START__);
                        sizeBuf = arrBuf[i].slice(this.__MSG_SIZE_START__, this.__MSG_DATA_START__);
                        sizeInt = sizeBuf.readIntBE(0, this.__MSG_SIZE_BYTE__);
                        typeInt = typeBuf.readIntBE(0, this.__MSG_TYPE_BYTE__);
                        return [4, this.__PROTOBUF__.lookupEnum(this.__OPTIONS__.enumname, typeInt)];
                    case 2:
                        typeStr = _a.sent();
                        dataBuf = arrBuf[i].slice(this.__MSG_DATA_START__);
                        return [3, 4];
                    case 3:
                        tempBuf = arrBuf[i].slice(this.__MSG_FLAG_START__);
                        dataBuf = Buffer.concat([dataBuf, tempBuf], dataBuf.length + tempBuf.length);
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3, 1];
                    case 5:
                        if (sizeInt === -1)
                            return [2];
                        if (dataBuf.length < sizeInt)
                            return [2];
                        dataBuf = dataBuf.slice(0, sizeInt);
                        return [4, this.__PROTOBUF__.decode(typeStr, dataBuf)];
                    case 6: return [2, _a.sent()];
                }
            });
        });
    };
    Protocol.prototype.msgSize = function (buffer) {
        return buffer.slice(this.__MSG_SIZE_START__, this.__MSG_DATA_START__)
            .readIntBE(0, this.__MSG_SIZE_BYTE__)
            + this.__MSG_FLAG_BYTE__
            + this.__MSG_TYPE_BYTE__
            + this.__MSG_SIZE_BYTE__;
    };
    Protocol.prototype.msgPages = function (buffer) {
        return Math.ceil(this.msgSize(buffer) / (this.__MSG_BYTE__ - this.__MSG_HEAD_STRING__.length));
    };
    Protocol.prototype.hasHead = function (buffer) {
        return buffer.slice(0, this.__MSG_FLAG_START__).toString() === this.__MSG_HEAD_STRING__ ? true : false;
    };
    Protocol.prototype.hasFlag = function (buffer) {
        return buffer.slice(this.__MSG_FLAG_START__, this.__MSG_TYPE_START__).toString() === this.__MSG_FLAG_STRING__ ? true : false;
    };
    return Protocol;
}());
exports.default = Protocol;

}).call(this,require("buffer").Buffer)
},{"./protobuf":6,"buffer":20}],8:[function(require,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var logs_1 = __importDefault(require("./logs"));
var Webusb = (function (_super) {
    __extends(Webusb, _super);
    function Webusb(options) {
        var _this = _super.call(this) || this;
        _this.__OPTIONS__ = options;
        logs_1.default.listen(function (log) { if (_this.__OPTIONS__.debug)
            console.log(log.id, log.time, log.title, log.data); });
        navigator.usb.addEventListener('disconnect', function (e) {
            _this.__DEVICE__ = undefined;
            _this.productId = undefined;
            _this.serialNumber = undefined;
            logs_1.default.add(e);
            _this.emit('disconnect', e);
        });
        return _this;
    }
    Webusb.prototype.requestDevice = function (filters) {
        return __awaiter(this, void 0, void 0, function () {
            var device, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, navigator.usb.requestDevice({ filters: filters })];
                    case 1:
                        device = _a.sent();
                        return [4, this.openDevice(device)];
                    case 2:
                        result = _a.sent();
                        if (!result)
                            return [2];
                        logs_1.default.add(device);
                        return [2, device];
                    case 3:
                        err_1 = _a.sent();
                        logs_1.default.add(err_1.message);
                        return [2];
                    case 4: return [2];
                }
            });
        });
    };
    Webusb.prototype.onConnect = function (cb) {
        var _this = this;
        navigator.usb.addEventListener('connect', function (e) {
            logs_1.default.add(e);
            _this.openDevice(e.device);
            cb(e);
        });
    };
    Webusb.prototype.onDisconnect = function (cb) {
        this.on('disconnect', function (e) { return cb(e); });
    };
    Webusb.prototype.getDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, navigator.usb.getDevices()];
                    case 1:
                        devices = _a.sent();
                        logs_1.default.add(devices);
                        return [2, devices];
                    case 2:
                        err_2 = _a.sent();
                        logs_1.default.add(err_2.message);
                        return [2];
                    case 3: return [2];
                }
            });
        });
    };
    Webusb.prototype.transferOut = function (endpointNumber, data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.__DEVICE__)
                            return [2, logs_1.default.add('transferOut', '__DEVICE__ is undefined')];
                        return [4, this.__DEVICE__.transferOut(endpointNumber, data)];
                    case 1:
                        result = _a.sent();
                        if (result.status !== 'ok')
                            return [2, logs_1.default.add('USBTransferStatus', result.status)];
                        logs_1.default.add('transferOut', Buffer.from(data).toString('hex'));
                        return [2];
                }
            });
        });
    };
    Webusb.prototype.transferIn = function (endpointNumber, length) {
        return __awaiter(this, void 0, void 0, function () {
            var result, inBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.__DEVICE__)
                            return [2, Buffer.alloc(0)];
                        return [4, this.__DEVICE__.transferIn(endpointNumber, length)];
                    case 1:
                        result = _a.sent();
                        if (!result.data)
                            return [2, Buffer.alloc(0)];
                        if (!(result.status === 'stall')) return [3, 3];
                        return [4, this.__DEVICE__.clearHalt('in', 1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        inBuf = Buffer.from(result.data.buffer);
                        logs_1.default.add('transferIn ', inBuf.toString('hex'));
                        return [2, inBuf];
                }
            });
        });
    };
    Webusb.prototype.openDevice = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, device.open()];
                    case 1:
                        _a.sent();
                        if (!device.opened)
                            return [2, false];
                        return [4, device.selectConfiguration(this.__OPTIONS__.selectConfiguration)];
                    case 2:
                        _a.sent();
                        return [4, device.claimInterface(this.__OPTIONS__.claimInterface)];
                    case 3:
                        _a.sent();
                        this.__DEVICE__ = device;
                        this.productId = device.productId;
                        this.serialNumber = device.serialNumber;
                        return [2, true];
                }
            });
        });
    };
    return Webusb;
}(events_1.EventEmitter));
exports.default = Webusb;

}).call(this,require("buffer").Buffer)
},{"./logs":5,"buffer":20,"events":21}],9:[function(require,module,exports){
"use strict";
module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}

},{}],10:[function(require,module,exports){
"use strict";

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};

},{}],11:[function(require,module,exports){
"use strict";
module.exports = codegen;

/**
 * Begins generating a function.
 * @memberof util
 * @param {string[]} functionParams Function parameter names
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 */
function codegen(functionParams, functionName) {

    /* istanbul ignore if */
    if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = undefined;
    }

    var body = [];

    /**
     * Appends code to the function's body or finishes generation.
     * @typedef Codegen
     * @type {function}
     * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
     * @param {...*} [formatParams] Format parameters
     * @returns {Codegen|Function} Itself or the generated function if finished
     * @throws {Error} If format parameter counts do not match
     */

    function Codegen(formatStringOrScope) {
        // note that explicit array handling below makes this ~50% faster

        // finish the function
        if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose)
                console.log("codegen: " + source); // eslint-disable-line no-console
            source = "return " + source;
            if (formatStringOrScope) {
                var scopeKeys   = Object.keys(formatStringOrScope),
                    scopeParams = new Array(scopeKeys.length + 1),
                    scopeValues = new Array(scopeKeys.length),
                    scopeOffset = 0;
                while (scopeOffset < scopeKeys.length) {
                    scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                    scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                }
                scopeParams[scopeOffset] = source;
                return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
            }
            return Function(source)(); // eslint-disable-line no-new-func
        }

        // otherwise append to body
        var formatParams = new Array(arguments.length - 1),
            formatOffset = 0;
        while (formatOffset < formatParams.length)
            formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];
            switch ($1) {
                case "d": case "f": return String(Number(value));
                case "i": return String(Math.floor(value));
                case "j": return JSON.stringify(value);
                case "s": return String(value);
            }
            return "%";
        });
        if (formatOffset !== formatParams.length)
            throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
    }

    function toString(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
    }

    Codegen.toString = toString;
    return Codegen;
}

/**
 * Begins generating a function.
 * @memberof util
 * @function codegen
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 * @variation 2
 */

/**
 * When set to `true`, codegen will log generated code to console. Useful for debugging.
 * @name util.codegen.verbose
 * @type {boolean}
 */
codegen.verbose = false;

},{}],12:[function(require,module,exports){
"use strict";
module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};

},{}],13:[function(require,module,exports){
"use strict";
module.exports = fetch;

var asPromise = require("@protobufjs/aspromise"),
    inquire   = require("@protobufjs/inquire");

var fs = inquire("fs");

/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */

/**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {FetchOptions} options Fetch options
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */
function fetch(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    } else if (!options)
        options = {};

    if (!callback)
        return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this

    // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
    if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined"
                ? fetch.xhr(filename, options, callback)
                : err
                ? callback(err)
                : callback(null, options.binary ? contents : contents.toString("utf8"));
        });

    // use the XHR version otherwise.
    return fetch.xhr(filename, options, callback);
}

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchOptions} [options] Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 * @variation 3
 */

/**/
fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange /* works everywhere */ = function fetchOnReadyStateChange() {

        if (xhr.readyState !== 4)
            return undefined;

        // local cors security errors return status 0 / empty string, too. afaik this cannot be
        // reliably distinguished from an actually empty file for security reasons. feel free
        // to send a pull request if you are aware of a solution.
        if (xhr.status !== 0 && xhr.status !== 200)
            return callback(Error("status " + xhr.status));

        // if binary data is expected, make sure that some sort of array is returned, even if
        // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
        if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
                buffer = [];
                for (var i = 0; i < xhr.responseText.length; ++i)
                    buffer.push(xhr.responseText.charCodeAt(i) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
    };

    if (options.binary) {
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
        if ("overrideMimeType" in xhr)
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
    }

    xhr.open("GET", filename);
    xhr.send();
};

},{"@protobufjs/aspromise":9,"@protobufjs/inquire":15}],14:[function(require,module,exports){
"use strict";

module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}

},{}],15:[function(require,module,exports){
"use strict";
module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}

},{}],16:[function(require,module,exports){
"use strict";

/**
 * A minimal path module to resolve Unix, Windows and URL paths alike.
 * @memberof util
 * @namespace
 */
var path = exports;

var isAbsolute =
/**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */
path.isAbsolute = function isAbsolute(path) {
    return /^(?:\/|\w+:)/.test(path);
};

var normalize =
/**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */
path.normalize = function normalize(path) {
    path = path.replace(/\\/g, "/")
               .replace(/\/{2,}/g, "/");
    var parts    = path.split("/"),
        absolute = isAbsolute(path),
        prefix   = "";
    if (absolute)
        prefix = parts.shift() + "/";
    for (var i = 0; i < parts.length;) {
        if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
                parts.splice(--i, 2);
            else if (absolute)
                parts.splice(i, 1);
            else
                ++i;
        } else if (parts[i] === ".")
            parts.splice(i, 1);
        else
            ++i;
    }
    return prefix + parts.join("/");
};

/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */
path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized)
        includePath = normalize(includePath);
    if (isAbsolute(includePath))
        return includePath;
    if (!alreadyNormalized)
        originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};

},{}],17:[function(require,module,exports){
"use strict";
module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}

},{}],18:[function(require,module,exports){
"use strict";

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};

},{}],19:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],20:[function(require,module,exports){
(function (Buffer){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? Symbol.for('nodejs.util.inspect.custom')
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    var proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef'
  var table = new Array(256)
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

}).call(this,require("buffer").Buffer)
},{"base64-js":19,"buffer":20,"ieee754":22}],21:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],22:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],23:[function(require,module,exports){
// full library entry point.

"use strict";
module.exports = require("./src/index");

},{"./src/index":32}],24:[function(require,module,exports){
"use strict";
module.exports = common;

var commonRe = /\/|\./;

/**
 * Provides common type definitions.
 * Can also be used to provide additional google types or your own custom types.
 * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
 * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
 * @returns {undefined}
 * @property {INamespace} google/protobuf/any.proto Any
 * @property {INamespace} google/protobuf/duration.proto Duration
 * @property {INamespace} google/protobuf/empty.proto Empty
 * @property {INamespace} google/protobuf/field_mask.proto FieldMask
 * @property {INamespace} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
 * @property {INamespace} google/protobuf/timestamp.proto Timestamp
 * @property {INamespace} google/protobuf/wrappers.proto Wrappers
 * @example
 * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
 * protobuf.common("descriptor", descriptorJson);
 *
 * // manually provides a custom definition (uses my.foo namespace)
 * protobuf.common("my/foo/bar.proto", myFooBarJson);
 */
function common(name, json) {
    if (!commonRe.test(name)) {
        name = "google/protobuf/" + name + ".proto";
        json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
    }
    common[name] = json;
}

// Not provided because of limited use (feel free to discuss or to provide yourself):
//
// google/protobuf/descriptor.proto
// google/protobuf/source_context.proto
// google/protobuf/type.proto
//
// Stripped and pre-parsed versions of these non-bundled files are instead available as part of
// the repository or package within the google/protobuf directory.

common("any", {

    /**
     * Properties of a google.protobuf.Any message.
     * @interface IAny
     * @type {Object}
     * @property {string} [typeUrl]
     * @property {Uint8Array} [bytes]
     * @memberof common
     */
    Any: {
        fields: {
            type_url: {
                type: "string",
                id: 1
            },
            value: {
                type: "bytes",
                id: 2
            }
        }
    }
});

var timeType;

common("duration", {

    /**
     * Properties of a google.protobuf.Duration message.
     * @interface IDuration
     * @type {Object}
     * @property {number|Long} [seconds]
     * @property {number} [nanos]
     * @memberof common
     */
    Duration: timeType = {
        fields: {
            seconds: {
                type: "int64",
                id: 1
            },
            nanos: {
                type: "int32",
                id: 2
            }
        }
    }
});

common("timestamp", {

    /**
     * Properties of a google.protobuf.Timestamp message.
     * @interface ITimestamp
     * @type {Object}
     * @property {number|Long} [seconds]
     * @property {number} [nanos]
     * @memberof common
     */
    Timestamp: timeType
});

common("empty", {

    /**
     * Properties of a google.protobuf.Empty message.
     * @interface IEmpty
     * @memberof common
     */
    Empty: {
        fields: {}
    }
});

common("struct", {

    /**
     * Properties of a google.protobuf.Struct message.
     * @interface IStruct
     * @type {Object}
     * @property {Object.<string,IValue>} [fields]
     * @memberof common
     */
    Struct: {
        fields: {
            fields: {
                keyType: "string",
                type: "Value",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.Value message.
     * @interface IValue
     * @type {Object}
     * @property {string} [kind]
     * @property {0} [nullValue]
     * @property {number} [numberValue]
     * @property {string} [stringValue]
     * @property {boolean} [boolValue]
     * @property {IStruct} [structValue]
     * @property {IListValue} [listValue]
     * @memberof common
     */
    Value: {
        oneofs: {
            kind: {
                oneof: [
                    "nullValue",
                    "numberValue",
                    "stringValue",
                    "boolValue",
                    "structValue",
                    "listValue"
                ]
            }
        },
        fields: {
            nullValue: {
                type: "NullValue",
                id: 1
            },
            numberValue: {
                type: "double",
                id: 2
            },
            stringValue: {
                type: "string",
                id: 3
            },
            boolValue: {
                type: "bool",
                id: 4
            },
            structValue: {
                type: "Struct",
                id: 5
            },
            listValue: {
                type: "ListValue",
                id: 6
            }
        }
    },

    NullValue: {
        values: {
            NULL_VALUE: 0
        }
    },

    /**
     * Properties of a google.protobuf.ListValue message.
     * @interface IListValue
     * @type {Object}
     * @property {Array.<IValue>} [values]
     * @memberof common
     */
    ListValue: {
        fields: {
            values: {
                rule: "repeated",
                type: "Value",
                id: 1
            }
        }
    }
});

common("wrappers", {

    /**
     * Properties of a google.protobuf.DoubleValue message.
     * @interface IDoubleValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    DoubleValue: {
        fields: {
            value: {
                type: "double",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.FloatValue message.
     * @interface IFloatValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    FloatValue: {
        fields: {
            value: {
                type: "float",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.Int64Value message.
     * @interface IInt64Value
     * @type {Object}
     * @property {number|Long} [value]
     * @memberof common
     */
    Int64Value: {
        fields: {
            value: {
                type: "int64",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.UInt64Value message.
     * @interface IUInt64Value
     * @type {Object}
     * @property {number|Long} [value]
     * @memberof common
     */
    UInt64Value: {
        fields: {
            value: {
                type: "uint64",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.Int32Value message.
     * @interface IInt32Value
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    Int32Value: {
        fields: {
            value: {
                type: "int32",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.UInt32Value message.
     * @interface IUInt32Value
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    UInt32Value: {
        fields: {
            value: {
                type: "uint32",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.BoolValue message.
     * @interface IBoolValue
     * @type {Object}
     * @property {boolean} [value]
     * @memberof common
     */
    BoolValue: {
        fields: {
            value: {
                type: "bool",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.StringValue message.
     * @interface IStringValue
     * @type {Object}
     * @property {string} [value]
     * @memberof common
     */
    StringValue: {
        fields: {
            value: {
                type: "string",
                id: 1
            }
        }
    },

    /**
     * Properties of a google.protobuf.BytesValue message.
     * @interface IBytesValue
     * @type {Object}
     * @property {Uint8Array} [value]
     * @memberof common
     */
    BytesValue: {
        fields: {
            value: {
                type: "bytes",
                id: 1
            }
        }
    }
});

common("field_mask", {

    /**
     * Properties of a google.protobuf.FieldMask message.
     * @interface IDoubleValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    FieldMask: {
        fields: {
            paths: {
                rule: "repeated",
                type: "string",
                id: 1
            }
        }
    }
});

/**
 * Gets the root definition of the specified common proto file.
 *
 * Bundled definitions are:
 * - google/protobuf/any.proto
 * - google/protobuf/duration.proto
 * - google/protobuf/empty.proto
 * - google/protobuf/field_mask.proto
 * - google/protobuf/struct.proto
 * - google/protobuf/timestamp.proto
 * - google/protobuf/wrappers.proto
 *
 * @param {string} file Proto file name
 * @returns {INamespace|null} Root definition or `null` if not defined
 */
common.get = function get(file) {
    return common[file] || null;
};

},{}],25:[function(require,module,exports){
"use strict";
/**
 * Runtime message from/to plain object converters.
 * @namespace
 */
var converter = exports;

var Enum = require("./enum"),
    util = require("./util");

/**
 * Generates a partial value fromObject conveter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(d%s){", prop);
            for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
                if (field.repeated && values[keys[i]] === field.typeDefault) gen
                ("default:");
                gen
                ("case%j:", keys[i])
                ("case %i:", values[keys[i]])
                    ("m%s=%j", prop, values[keys[i]])
                    ("break");
            } gen
            ("}");
        } else gen
            ("if(typeof d%s!==\"object\")", prop)
                ("throw TypeError(%j)", field.fullName + ": object expected")
            ("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
    } else {
        var isUnsigned = false;
        switch (field.type) {
            case "double":
            case "float": gen
                ("m%s=Number(d%s)", prop, prop); // also catches "NaN", "Infinity"
                break;
            case "uint32":
            case "fixed32": gen
                ("m%s=d%s>>>0", prop, prop);
                break;
            case "int32":
            case "sint32":
            case "sfixed32": gen
                ("m%s=d%s|0", prop, prop);
                break;
            case "uint64":
                isUnsigned = true;
                // eslint-disable-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(util.Long)")
                    ("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)
                ("else if(typeof d%s===\"string\")", prop)
                    ("m%s=parseInt(d%s,10)", prop, prop)
                ("else if(typeof d%s===\"number\")", prop)
                    ("m%s=d%s", prop, prop)
                ("else if(typeof d%s===\"object\")", prop)
                    ("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
                break;
            case "bytes": gen
                ("if(typeof d%s===\"string\")", prop)
                    ("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)
                ("else if(d%s.length)", prop)
                    ("m%s=d%s", prop, prop);
                break;
            case "string": gen
                ("m%s=String(d%s)", prop, prop);
                break;
            case "bool": gen
                ("m%s=Boolean(d%s)", prop, prop);
                break;
            /* default: gen
                ("m%s=d%s", prop, prop);
                break; */
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.fromObject = function fromObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray;
    var gen = util.codegen(["d"], mtype.name + "$fromObject")
    ("if(d instanceof this.ctor)")
        ("return d");
    if (!fields.length) return gen
    ("return new this.ctor");
    gen
    ("var m=new this.ctor");
    for (var i = 0; i < fields.length; ++i) {
        var field  = fields[i].resolve(),
            prop   = util.safeProp(field.name);

        // Map fields
        if (field.map) { gen
    ("if(d%s){", prop)
        ("if(typeof d%s!==\"object\")", prop)
            ("throw TypeError(%j)", field.fullName + ": object expected")
        ("m%s={}", prop)
        ("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
            genValuePartial_fromObject(gen, field, /* not sorted */ i, prop + "[ks[i]]")
        ("}")
    ("}");

        // Repeated fields
        } else if (field.repeated) { gen
    ("if(d%s){", prop)
        ("if(!Array.isArray(d%s))", prop)
            ("throw TypeError(%j)", field.fullName + ": array expected")
        ("m%s=[]", prop)
        ("for(var i=0;i<d%s.length;++i){", prop);
            genValuePartial_fromObject(gen, field, /* not sorted */ i, prop + "[i]")
        ("}")
    ("}");

        // Non-repeated fields
        } else {
            if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
    ("if(d%s!=null){", prop); // !== undefined && !== null
        genValuePartial_fromObject(gen, field, /* not sorted */ i, prop);
            if (!(field.resolvedType instanceof Enum)) gen
    ("}");
        }
    } return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/**
 * Generates a partial value toObject converter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_toObject(gen, field, fieldIndex, prop) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) gen
            ("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop);
        else gen
            ("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
    } else {
        var isUnsigned = false;
        switch (field.type) {
            case "double":
            case "float": gen
            ("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
                break;
            case "uint64":
                isUnsigned = true;
                // eslint-disable-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
            ("if(typeof m%s===\"number\")", prop)
                ("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)
            ("else") // Long-like
                ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true": "", prop);
                break;
            case "bytes": gen
            ("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
                break;
            default: gen
            ("d%s=m%s", prop, prop);
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a runtime message to plain object converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.toObject = function toObject(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    if (!fields.length)
        return util.codegen()("return {}");
    var gen = util.codegen(["m", "o"], mtype.name + "$toObject")
    ("if(!o)")
        ("o={}")
    ("var d={}");

    var repeatedFields = [],
        mapFields = [],
        normalFields = [],
        i = 0;
    for (; i < fields.length; ++i)
        if (!fields[i].partOf)
            ( fields[i].resolve().repeated ? repeatedFields
            : fields[i].map ? mapFields
            : normalFields).push(fields[i]);

    if (repeatedFields.length) { gen
    ("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen
        ("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen
    ("}");
    }

    if (mapFields.length) { gen
    ("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen
        ("d%s={}", util.safeProp(mapFields[i].name));
        gen
    ("}");
    }

    if (normalFields.length) { gen
    ("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
            var field = normalFields[i],
                prop  = util.safeProp(field.name);
            if (field.resolvedType instanceof Enum) gen
        ("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
            else if (field.long) gen
        ("if(util.Long){")
            ("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)
            ("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)
        ("}else")
            ("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
            else if (field.bytes) {
                var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
                gen
        ("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))
        ("else{")
            ("d%s=%s", prop, arrayDefault)
            ("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)
        ("}");
            } else gen
        ("d%s=%j", prop, field.typeDefault); // also messages (=null)
        } gen
    ("}");
    }
    var hasKs2 = false;
    for (i = 0; i < fields.length; ++i) {
        var field = fields[i],
            index = mtype._fieldsArray.indexOf(field),
            prop  = util.safeProp(field.name);
        if (field.map) {
            if (!hasKs2) { hasKs2 = true; gen
    ("var ks2");
            } gen
    ("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)
        ("d%s={}", prop)
        ("for(var j=0;j<ks2.length;++j){");
            genValuePartial_toObject(gen, field, /* sorted */ index, prop + "[ks2[j]]")
        ("}");
        } else if (field.repeated) { gen
    ("if(m%s&&m%s.length){", prop, prop)
        ("d%s=[]", prop)
        ("for(var j=0;j<m%s.length;++j){", prop);
            genValuePartial_toObject(gen, field, /* sorted */ index, prop + "[j]")
        ("}");
        } else { gen
    ("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null
        genValuePartial_toObject(gen, field, /* sorted */ index, prop);
        if (field.partOf) gen
        ("if(o.oneofs)")
            ("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen
    ("}");
    }
    return gen
    ("return d");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

},{"./enum":28,"./util":50}],26:[function(require,module,exports){
"use strict";
module.exports = decoder;

var Enum    = require("./enum"),
    types   = require("./types"),
    util    = require("./util");

function missing(field) {
    return "missing required '" + field.name + "'";
}

/**
 * Generates a decoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function decoder(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen(["r", "l"], mtype.name + "$decode")
    ("if(!(r instanceof Reader))")
        ("r=Reader.create(r)")
    ("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field) { return field.map; }).length ? ",k" : ""))
    ("while(r.pos<c){")
        ("var t=r.uint32()");
    if (mtype.group) gen
        ("if((t&7)===4)")
            ("break");
    gen
        ("switch(t>>>3){");

    var i = 0;
    for (; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            type  = field.resolvedType instanceof Enum ? "int32" : field.type,
            ref   = "m" + util.safeProp(field.name); gen
            ("case %i:", field.id);

        // Map fields
        if (field.map) { gen
                ("r.skip().pos++") // assumes id 1 + key wireType
                ("if(%s===util.emptyObject)", ref)
                    ("%s={}", ref)
                ("k=r.%s()", field.keyType)
                ("r.pos++"); // assumes id 2 + value wireType
            if (types.long[field.keyType] !== undefined) {
                if (types.basic[type] === undefined) gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", ref, type);
            } else {
                if (types.basic[type] === undefined) gen
                ("%s[k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[k]=r.%s()", ref, type);
            }

        // Repeated fields
        } else if (field.repeated) { gen

                ("if(!(%s&&%s.length))", ref, ref)
                    ("%s=[]", ref);

            // Packable (always check for forward and backward compatiblity)
            if (types.packed[type] !== undefined) gen
                ("if((t&7)===2){")
                    ("var c2=r.uint32()+r.pos")
                    ("while(r.pos<c2)")
                        ("%s.push(r.%s())", ref, type)
                ("}else");

            // Non-packed
            if (types.basic[type] === undefined) gen(field.resolvedType.group
                    ? "%s.push(types[%i].decode(r))"
                    : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
            else gen
                    ("%s.push(r.%s())", ref, type);

        // Non-repeated
        } else if (types.basic[type] === undefined) gen(field.resolvedType.group
                ? "%s=types[%i].decode(r)"
                : "%s=types[%i].decode(r,r.uint32())", ref, i);
        else gen
                ("%s=r.%s()", ref, type);
        gen
                ("break");
    // Unknown fields
    } gen
            ("default:")
                ("r.skipType(t&7)")
                ("break")

        ("}")
    ("}");

    // Field presence
    for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen
    ("if(!m.hasOwnProperty(%j))", rfield.name)
        ("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }

    return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline */
}

},{"./enum":28,"./types":49,"./util":50}],27:[function(require,module,exports){
"use strict";
module.exports = encoder;

var Enum     = require("./enum"),
    types    = require("./types"),
    util     = require("./util");

/**
 * Generates a partial message type encoder.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genTypePartial(gen, field, fieldIndex, ref) {
    return field.resolvedType.group
        ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0)
        : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
}

/**
 * Generates an encoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function encoder(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var gen = util.codegen(["m", "w"], mtype.name + "$encode")
    ("if(!w)")
        ("w=Writer.create()");

    var i, ref;

    // "when a message is serialized its known fields should be written sequentially by field number"
    var fields = /* initializes */ mtype.fieldsArray.slice().sort(util.compareFieldsById);

    for (var i = 0; i < fields.length; ++i) {
        var field    = fields[i].resolve(),
            index    = mtype._fieldsArray.indexOf(field),
            type     = field.resolvedType instanceof Enum ? "int32" : field.type,
            wireType = types.basic[type];
            ref      = "m" + util.safeProp(field.name);

        // Map fields
        if (field.map) {
            gen
    ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name) // !== undefined && !== null
        ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)
            ("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === undefined) gen
            ("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
            else gen
            (".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen
        ("}")
    ("}");

            // Repeated fields
        } else if (field.repeated) { gen
    ("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null

            // Packed repeated
            if (field.packed && types.packed[type] !== undefined) { gen

        ("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)
        ("for(var i=0;i<%s.length;++i)", ref)
            ("w.%s(%s[i])", type, ref)
        ("w.ldelim()");

            // Non-packed
            } else { gen

        ("for(var i=0;i<%s.length;++i)", ref);
                if (wireType === undefined)
            genTypePartial(gen, field, index, ref + "[i]");
                else gen
            ("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);

            } gen
    ("}");

        // Non-repeated
        } else {
            if (field.optional) gen
    ("if(%s!=null&&m.hasOwnProperty(%j))", ref, field.name); // !== undefined && !== null

            if (wireType === undefined)
        genTypePartial(gen, field, index, ref);
            else gen
        ("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);

        }
    }

    return gen
    ("return w");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}
},{"./enum":28,"./types":49,"./util":50}],28:[function(require,module,exports){
"use strict";
module.exports = Enum;

// extends ReflectionObject
var ReflectionObject = require("./object");
((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

var Namespace = require("./namespace"),
    util = require("./util");

/**
 * Constructs a new enum instance.
 * @classdesc Reflected enum.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {Object.<string,number>} [values] Enum values as an object, by name
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this enum
 * @param {Object.<string,string>} [comments] The value comments for this enum
 */
function Enum(name, values, options, comment, comments) {
    ReflectionObject.call(this, name, options);

    if (values && typeof values !== "object")
        throw TypeError("values must be an object");

    /**
     * Enum values by id.
     * @type {Object.<number,string>}
     */
    this.valuesById = {};

    /**
     * Enum values by name.
     * @type {Object.<string,number>}
     */
    this.values = Object.create(this.valuesById); // toJSON, marker

    /**
     * Enum comment text.
     * @type {string|null}
     */
    this.comment = comment;

    /**
     * Value comment texts, if any.
     * @type {Object.<string,string>}
     */
    this.comments = comments || {};

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    // Note that values inherit valuesById on their prototype which makes them a TypeScript-
    // compatible enum. This is used by pbts to write actual enum definitions that work for
    // static and reflection code alike instead of emitting generic object definitions.

    if (values)
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
            if (typeof values[keys[i]] === "number") // use forward entries only
                this.valuesById[ this.values[keys[i]] = values[keys[i]] ] = keys[i];
}

/**
 * Enum descriptor.
 * @interface IEnum
 * @property {Object.<string,number>} values Enum values
 * @property {Object.<string,*>} [options] Enum options
 */

/**
 * Constructs an enum from an enum descriptor.
 * @param {string} name Enum name
 * @param {IEnum} json Enum descriptor
 * @returns {Enum} Created enum
 * @throws {TypeError} If arguments are invalid
 */
Enum.fromJSON = function fromJSON(name, json) {
    var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
    enm.reserved = json.reserved;
    return enm;
};

/**
 * Converts this enum to an enum descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IEnum} Enum descriptor
 */
Enum.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options"  , this.options,
        "values"   , this.values,
        "reserved" , this.reserved && this.reserved.length ? this.reserved : undefined,
        "comment"  , keepComments ? this.comment : undefined,
        "comments" , keepComments ? this.comments : undefined
    ]);
};

/**
 * Adds a value to this enum.
 * @param {string} name Value name
 * @param {number} id Value id
 * @param {string} [comment] Comment, if any
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a value with this name or id
 */
Enum.prototype.add = function add(name, id, comment) {
    // utilized by the parser but not by .fromJSON

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (!util.isInteger(id))
        throw TypeError("id must be an integer");

    if (this.values[name] !== undefined)
        throw Error("duplicate name '" + name + "' in " + this);

    if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);

    if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);

    if (this.valuesById[id] !== undefined) {
        if (!(this.options && this.options.allow_alias))
            throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
    } else
        this.valuesById[this.values[name] = id] = name;

    this.comments[name] = comment || null;
    return this;
};

/**
 * Removes a value from this enum
 * @param {string} name Value name
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `name` is not a name of this enum
 */
Enum.prototype.remove = function remove(name) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    var val = this.values[name];
    if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);

    delete this.valuesById[val];
    delete this.values[name];
    delete this.comments[name];

    return this;
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Enum.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Enum.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
};

},{"./namespace":36,"./object":37,"./util":50}],29:[function(require,module,exports){
"use strict";
module.exports = Field;

// extends ReflectionObject
var ReflectionObject = require("./object");
((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

var Enum  = require("./enum"),
    types = require("./types"),
    util  = require("./util");

var Type; // cyclic

var ruleRe = /^required|optional|repeated$/;

/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @name Field
 * @classdesc Reflected message field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a field from a field descriptor.
 * @param {string} name Field name
 * @param {IField} json Field descriptor
 * @returns {Field} Created field
 * @throws {TypeError} If arguments are invalid
 */
Field.fromJSON = function fromJSON(name, json) {
    return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
};

/**
 * Not an actual constructor. Use {@link Field} instead.
 * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports FieldBase
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function Field(name, id, type, rule, extend, options, comment) {

    if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = undefined;
    } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = undefined;
    }

    ReflectionObject.call(this, name, options);

    if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");

    if (!util.isString(type))
        throw TypeError("type must be a string");

    if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");

    if (extend !== undefined && !util.isString(extend))
        throw TypeError("extend must be a string");

    /**
     * Field rule, if any.
     * @type {string|undefined}
     */
    this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

    /**
     * Field type.
     * @type {string}
     */
    this.type = type; // toJSON

    /**
     * Unique field id.
     * @type {number}
     */
    this.id = id; // toJSON, marker

    /**
     * Extended type if different from parent.
     * @type {string|undefined}
     */
    this.extend = extend || undefined; // toJSON

    /**
     * Whether this field is required.
     * @type {boolean}
     */
    this.required = rule === "required";

    /**
     * Whether this field is optional.
     * @type {boolean}
     */
    this.optional = !this.required;

    /**
     * Whether this field is repeated.
     * @type {boolean}
     */
    this.repeated = rule === "repeated";

    /**
     * Whether this field is a map or not.
     * @type {boolean}
     */
    this.map = false;

    /**
     * Message this field belongs to.
     * @type {Type|null}
     */
    this.message = null;

    /**
     * OneOf this field belongs to, if any,
     * @type {OneOf|null}
     */
    this.partOf = null;

    /**
     * The field type's default value.
     * @type {*}
     */
    this.typeDefault = null;

    /**
     * The field's default value on prototypes.
     * @type {*}
     */
    this.defaultValue = null;

    /**
     * Whether this field's value should be treated as a long.
     * @type {boolean}
     */
    this.long = util.Long ? types.long[type] !== undefined : /* istanbul ignore next */ false;

    /**
     * Whether this field's value is a buffer.
     * @type {boolean}
     */
    this.bytes = type === "bytes";

    /**
     * Resolved type if not a basic type.
     * @type {Type|Enum|null}
     */
    this.resolvedType = null;

    /**
     * Sister-field within the extended type if a declaring extension field.
     * @type {Field|null}
     */
    this.extensionField = null;

    /**
     * Sister-field within the declaring namespace if an extended field.
     * @type {Field|null}
     */
    this.declaringField = null;

    /**
     * Internally remembers whether this field is packed.
     * @type {boolean|null}
     * @private
     */
    this._packed = null;

    /**
     * Comment for this field.
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Determines whether this field is packed. Only relevant when repeated and working with proto2.
 * @name Field#packed
 * @type {boolean}
 * @readonly
 */
Object.defineProperty(Field.prototype, "packed", {
    get: function() {
        // defaults to packed=true if not explicity set to false
        if (this._packed === null)
            this._packed = this.getOption("packed") !== false;
        return this._packed;
    }
});

/**
 * @override
 */
Field.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (name === "packed") // clear cached before setting
        this._packed = null;
    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
};

/**
 * Field descriptor.
 * @interface IField
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension field descriptor.
 * @interface IExtensionField
 * @extends IField
 * @property {string} extend Extended type
 */

/**
 * Converts this field to a field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IField} Field descriptor
 */
Field.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "rule"    , this.rule !== "optional" && this.rule || undefined,
        "type"    , this.type,
        "id"      , this.id,
        "extend"  , this.extend,
        "options" , this.options,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Resolves this field's type references.
 * @returns {Field} `this`
 * @throws {Error} If any reference cannot be resolved
 */
Field.prototype.resolve = function resolve() {

    if (this.resolved)
        return this;

    if ((this.typeDefault = types.defaults[this.type]) === undefined) { // if not a basic type, resolve it
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
            this.typeDefault = null;
        else // instanceof Enum
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
    }

    // use explicitly set default value if present
    if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
            this.typeDefault = this.resolvedType.values[this.typeDefault];
    }

    // remove unnecessary options
    if (this.options) {
        if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
            delete this.options.packed;
        if (!Object.keys(this.options).length)
            this.options = undefined;
    }

    // convert to internal data type if necesssary
    if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");

        /* istanbul ignore else */
        if (Object.freeze)
            Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)

    } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
            util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
    }

    // take special care of maps and repeated fields
    if (this.map)
        this.defaultValue = util.emptyObject;
    else if (this.repeated)
        this.defaultValue = util.emptyArray;
    else
        this.defaultValue = this.typeDefault;

    // ensure proper value on prototype
    if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;

    return ReflectionObject.prototype.resolve.call(this);
};

/**
 * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
 * @typedef FieldDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} fieldName Field name
 * @returns {undefined}
 */

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @param {T} [defaultValue] Default value
 * @returns {FieldDecorator} Decorator function
 * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
 */
Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {

    // submessage: decorate the submessage and use its name as the type
    if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;

    // enum reference: create a reflected copy of the enum and keep reuseing it
    else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;

    return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor)
            .add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
    };
};

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {Constructor<T>|string} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @returns {FieldDecorator} Decorator function
 * @template T extends Message<T>
 * @variation 2
 */
// like Field.d but without a default value

// Sets up cyclic dependencies (called in index-light)
Field._configure = function configure(Type_) {
    Type = Type_;
};

},{"./enum":28,"./object":37,"./types":49,"./util":50}],30:[function(require,module,exports){
"use strict";
var protobuf = module.exports = require("./index-minimal");

protobuf.build = "light";

/**
 * A node-style callback as used by {@link load} and {@link Root#load}.
 * @typedef LoadCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Root} [root] Root, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} root Root namespace, defaults to create a new one if omitted.
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 */
function load(filename, root, callback) {
    if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
    } else if (!root)
        root = new protobuf.Root();
    return root.load(filename, callback);
}

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Promise<Root>} Promise
 * @see {@link Root#load}
 * @variation 3
 */
// function load(filename:string, [root:Root]):Promise<Root>

protobuf.load = load;

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 * @see {@link Root#loadSync}
 */
function loadSync(filename, root) {
    if (!root)
        root = new protobuf.Root();
    return root.loadSync(filename);
}

protobuf.loadSync = loadSync;

// Serialization
protobuf.encoder          = require("./encoder");
protobuf.decoder          = require("./decoder");
protobuf.verifier         = require("./verifier");
protobuf.converter        = require("./converter");

// Reflection
protobuf.ReflectionObject = require("./object");
protobuf.Namespace        = require("./namespace");
protobuf.Root             = require("./root");
protobuf.Enum             = require("./enum");
protobuf.Type             = require("./type");
protobuf.Field            = require("./field");
protobuf.OneOf            = require("./oneof");
protobuf.MapField         = require("./mapfield");
protobuf.Service          = require("./service");
protobuf.Method           = require("./method");

// Runtime
protobuf.Message          = require("./message");
protobuf.wrappers         = require("./wrappers");

// Utility
protobuf.types            = require("./types");
protobuf.util             = require("./util");

// Set up possibly cyclic reflection dependencies
protobuf.ReflectionObject._configure(protobuf.Root);
protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
protobuf.Root._configure(protobuf.Type);
protobuf.Field._configure(protobuf.Type);

},{"./converter":25,"./decoder":26,"./encoder":27,"./enum":28,"./field":29,"./index-minimal":31,"./mapfield":33,"./message":34,"./method":35,"./namespace":36,"./object":37,"./oneof":38,"./root":42,"./service":46,"./type":48,"./types":49,"./util":50,"./verifier":53,"./wrappers":54}],31:[function(require,module,exports){
"use strict";
var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = require("./writer");
protobuf.BufferWriter = require("./writer_buffer");
protobuf.Reader       = require("./reader");
protobuf.BufferReader = require("./reader_buffer");

// Utility
protobuf.util         = require("./util/minimal");
protobuf.rpc          = require("./rpc");
protobuf.roots        = require("./roots");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Set up buffer utility according to the environment
protobuf.Writer._configure(protobuf.BufferWriter);
configure();

},{"./reader":40,"./reader_buffer":41,"./roots":43,"./rpc":44,"./util/minimal":52,"./writer":55,"./writer_buffer":56}],32:[function(require,module,exports){
"use strict";
var protobuf = module.exports = require("./index-light");

protobuf.build = "full";

// Parser
protobuf.tokenize         = require("./tokenize");
protobuf.parse            = require("./parse");
protobuf.common           = require("./common");

// Configure parser
protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);

},{"./common":24,"./index-light":30,"./parse":39,"./tokenize":47}],33:[function(require,module,exports){
"use strict";
module.exports = MapField;

// extends Field
var Field = require("./field");
((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

var types   = require("./types"),
    util    = require("./util");

/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function MapField(name, id, keyType, type, options, comment) {
    Field.call(this, name, id, type, undefined, undefined, options, comment);

    /* istanbul ignore if */
    if (!util.isString(keyType))
        throw TypeError("keyType must be a string");

    /**
     * Key type.
     * @type {string}
     */
    this.keyType = keyType; // toJSON, marker

    /**
     * Resolved key type if not a basic type.
     * @type {ReflectionObject|null}
     */
    this.resolvedKeyType = null;

    // Overrides Field#map
    this.map = true;
}

/**
 * Map field descriptor.
 * @interface IMapField
 * @extends {IField}
 * @property {string} keyType Key type
 */

/**
 * Extension map field descriptor.
 * @interface IExtensionMapField
 * @extends IMapField
 * @property {string} extend Extended type
 */

/**
 * Constructs a map field from a map field descriptor.
 * @param {string} name Field name
 * @param {IMapField} json Map field descriptor
 * @returns {MapField} Created map field
 * @throws {TypeError} If arguments are invalid
 */
MapField.fromJSON = function fromJSON(name, json) {
    return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
};

/**
 * Converts this map field to a map field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMapField} Map field descriptor
 */
MapField.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "keyType" , this.keyType,
        "type"    , this.type,
        "id"      , this.id,
        "extend"  , this.extend,
        "options" , this.options,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
MapField.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;

    // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"
    if (types.mapKey[this.keyType] === undefined)
        throw Error("invalid key type: " + this.keyType);

    return Field.prototype.resolve.call(this);
};

/**
 * Map field decorator (TypeScript).
 * @name MapField.d
 * @function
 * @param {number} fieldId Field id
 * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
 * @returns {FieldDecorator} Decorator function
 * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
 */
MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {

    // submessage value: decorate the submessage and use its name as the type
    if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;

    // enum reference value: create a reflected copy of the enum and keep reuseing it
    else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;

    return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor)
            .add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
    };
};

},{"./field":29,"./types":49,"./util":50}],34:[function(require,module,exports){
"use strict";
module.exports = Message;

var util = require("./util/minimal");

/**
 * Constructs a new message instance.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Properties<T>} [properties] Properties to set
 * @template T extends object = object
 */
function Message(properties) {
    // not used internally
    if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            this[keys[i]] = properties[keys[i]];
}

/**
 * Reference to the reflected type.
 * @name Message.$type
 * @type {Type}
 * @readonly
 */

/**
 * Reference to the reflected type.
 * @name Message#$type
 * @type {Type}
 * @readonly
 */

/*eslint-disable valid-jsdoc*/

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<T>} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.create = function create(properties) {
    return this.$type.create(properties);
};

/**
 * Encodes a message of this type.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.encode = function encode(message, writer) {
    return this.$type.encode(message, writer);
};

/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.$type.encodeDelimited(message, writer);
};

/**
 * Decodes a message of this type.
 * @name Message.decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.decode = function decode(reader) {
    return this.$type.decode(reader);
};

/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Message.decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.decodeDelimited = function decodeDelimited(reader) {
    return this.$type.decodeDelimited(reader);
};

/**
 * Verifies a message of this type.
 * @name Message.verify
 * @function
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {string|null} `null` if valid, otherwise the reason why it is not
 */
Message.verify = function verify(message) {
    return this.$type.verify(message);
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {T} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.fromObject = function fromObject(object) {
    return this.$type.fromObject(object);
};

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {T} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @template T extends Message<T>
 * @this Constructor<T>
 */
Message.toObject = function toObject(message, options) {
    return this.$type.toObject(message, options);
};

/**
 * Converts this message to JSON.
 * @returns {Object.<string,*>} JSON object
 */
Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util.toJSONOptions);
};

/*eslint-enable valid-jsdoc*/
},{"./util/minimal":52}],35:[function(require,module,exports){
"use strict";
module.exports = Method;

// extends ReflectionObject
var ReflectionObject = require("./object");
((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

var util = require("./util");

/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this method
 */
function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {

    /* istanbul ignore next */
    if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = undefined;
    } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = undefined;
    }

    /* istanbul ignore if */
    if (!(type === undefined || util.isString(type)))
        throw TypeError("type must be a string");

    /* istanbul ignore if */
    if (!util.isString(requestType))
        throw TypeError("requestType must be a string");

    /* istanbul ignore if */
    if (!util.isString(responseType))
        throw TypeError("responseType must be a string");

    ReflectionObject.call(this, name, options);

    /**
     * Method type.
     * @type {string}
     */
    this.type = type || "rpc"; // toJSON

    /**
     * Request type.
     * @type {string}
     */
    this.requestType = requestType; // toJSON, marker

    /**
     * Whether requests are streamed or not.
     * @type {boolean|undefined}
     */
    this.requestStream = requestStream ? true : undefined; // toJSON

    /**
     * Response type.
     * @type {string}
     */
    this.responseType = responseType; // toJSON

    /**
     * Whether responses are streamed or not.
     * @type {boolean|undefined}
     */
    this.responseStream = responseStream ? true : undefined; // toJSON

    /**
     * Resolved request type.
     * @type {Type|null}
     */
    this.resolvedRequestType = null;

    /**
     * Resolved response type.
     * @type {Type|null}
     */
    this.resolvedResponseType = null;

    /**
     * Comment for this method
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Method descriptor.
 * @interface IMethod
 * @property {string} [type="rpc"] Method type
 * @property {string} requestType Request type
 * @property {string} responseType Response type
 * @property {boolean} [requestStream=false] Whether requests are streamed
 * @property {boolean} [responseStream=false] Whether responses are streamed
 * @property {Object.<string,*>} [options] Method options
 */

/**
 * Constructs a method from a method descriptor.
 * @param {string} name Method name
 * @param {IMethod} json Method descriptor
 * @returns {Method} Created method
 * @throws {TypeError} If arguments are invalid
 */
Method.fromJSON = function fromJSON(name, json) {
    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
};

/**
 * Converts this method to a method descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMethod} Method descriptor
 */
Method.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "type"           , this.type !== "rpc" && /* istanbul ignore next */ this.type || undefined,
        "requestType"    , this.requestType,
        "requestStream"  , this.requestStream,
        "responseType"   , this.responseType,
        "responseStream" , this.responseStream,
        "options"        , this.options,
        "comment"        , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
Method.prototype.resolve = function resolve() {

    /* istanbul ignore if */
    if (this.resolved)
        return this;

    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);

    return ReflectionObject.prototype.resolve.call(this);
};

},{"./object":37,"./util":50}],36:[function(require,module,exports){
"use strict";
module.exports = Namespace;

// extends ReflectionObject
var ReflectionObject = require("./object");
((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

var Field    = require("./field"),
    util     = require("./util");

var Type,    // cyclic
    Service,
    Enum;

/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a namespace from JSON.
 * @memberof Namespace
 * @function
 * @param {string} name Namespace name
 * @param {Object.<string,*>} json JSON object
 * @returns {Namespace} Created namespace
 * @throws {TypeError} If arguments are invalid
 */
Namespace.fromJSON = function fromJSON(name, json) {
    return new Namespace(name, json.options).addJSON(json.nested);
};

/**
 * Converts an array of reflection objects to JSON.
 * @memberof Namespace
 * @param {ReflectionObject[]} array Object array
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
 */
function arrayToJSON(array, toJSONOptions) {
    if (!(array && array.length))
        return undefined;
    var obj = {};
    for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
    return obj;
}

Namespace.arrayToJSON = arrayToJSON;

/**
 * Tests if the specified id is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Namespace.isReservedId = function isReservedId(reserved, id) {
    if (reserved)
        for (var i = 0; i < reserved.length; ++i)
            if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] >= id)
                return true;
    return false;
};

/**
 * Tests if the specified name is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Namespace.isReservedName = function isReservedName(reserved, name) {
    if (reserved)
        for (var i = 0; i < reserved.length; ++i)
            if (reserved[i] === name)
                return true;
    return false;
};

/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */
function Namespace(name, options) {
    ReflectionObject.call(this, name, options);

    /**
     * Nested objects by name.
     * @type {Object.<string,ReflectionObject>|undefined}
     */
    this.nested = undefined; // toJSON

    /**
     * Cached nested objects as an array.
     * @type {ReflectionObject[]|null}
     * @private
     */
    this._nestedArray = null;
}

function clearCache(namespace) {
    namespace._nestedArray = null;
    return namespace;
}

/**
 * Nested objects of this namespace as an array for iteration.
 * @name NamespaceBase#nestedArray
 * @type {ReflectionObject[]}
 * @readonly
 */
Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
    }
});

/**
 * Namespace descriptor.
 * @interface INamespace
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
 */

/**
 * Any extension field descriptor.
 * @typedef AnyExtensionField
 * @type {IExtensionField|IExtensionMapField}
 */

/**
 * Any nested object descriptor.
 * @typedef AnyNestedObject
 * @type {IEnum|IType|IService|AnyExtensionField|INamespace}
 */
// ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionField exists in the first place)

/**
 * Converts this namespace to a namespace descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {INamespace} Namespace descriptor
 */
Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
    return util.toObject([
        "options" , this.options,
        "nested"  , arrayToJSON(this.nestedArray, toJSONOptions)
    ]);
};

/**
 * Adds nested objects to this namespace from nested object descriptors.
 * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
 * @returns {Namespace} `this`
 */
Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    /* istanbul ignore else */
    if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
            nested = nestedJson[names[i]];
            ns.add( // most to least likely
                ( nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : nested.id !== undefined
                ? Field.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    }
    return this;
};

/**
 * Gets the nested object of the specified name.
 * @param {string} name Nested object name
 * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
 */
Namespace.prototype.get = function get(name) {
    return this.nested && this.nested[name]
        || null;
};

/**
 * Gets the values of the nested {@link Enum|enum} of the specified name.
 * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
 * @param {string} name Nested enum name
 * @returns {Object.<string,number>} Enum values
 * @throws {Error} If there is no such enum
 */
Namespace.prototype.getEnum = function getEnum(name) {
    if (this.nested && this.nested[name] instanceof Enum)
        return this.nested[name].values;
    throw Error("no such enum: " + name);
};

/**
 * Adds a nested object to this namespace.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name
 */
Namespace.prototype.add = function add(object) {

    if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");

    if (!this.nested)
        this.nested = {};
    else {
        var prev = this.get(object.name);
        if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
                // replace plain namespace but keep existing nested elements and options
                var nested = prev.nestedArray;
                for (var i = 0; i < nested.length; ++i)
                    object.add(nested[i]);
                this.remove(prev);
                if (!this.nested)
                    this.nested = {};
                object.setOptions(prev.options, true);

            } else
                throw Error("duplicate name '" + object.name + "' in " + this);
        }
    }
    this.nested[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
};

/**
 * Removes a nested object from this namespace.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this namespace
 */
Namespace.prototype.remove = function remove(object) {

    if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
    if (object.parent !== this)
        throw Error(object + " is not a member of " + this);

    delete this.nested[object.name];
    if (!Object.keys(this.nested).length)
        this.nested = undefined;

    object.onRemove(this);
    return clearCache(this);
};

/**
 * Defines additial namespaces within this one if not yet existing.
 * @param {string|string[]} path Path to create
 * @param {*} [json] Nested types to create from JSON
 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
 */
Namespace.prototype.define = function define(path, json) {

    if (util.isString(path))
        path = path.split(".");
    else if (!Array.isArray(path))
        throw TypeError("illegal path");
    if (path && path.length && path[0] === "")
        throw Error("path must be relative");

    var ptr = this;
    while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace))
                throw Error("path conflicts with non-namespace objects");
        } else
            ptr.add(ptr = new Namespace(part));
    }
    if (json)
        ptr.addJSON(json);
    return ptr;
};

/**
 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
 * @returns {Namespace} `this`
 */
Namespace.prototype.resolveAll = function resolveAll() {
    var nested = this.nestedArray, i = 0;
    while (i < nested.length)
        if (nested[i] instanceof Namespace)
            nested[i++].resolveAll();
        else
            nested[i++].resolve();
    return this.resolve();
};

/**
 * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
 * @param {string|string[]} path Path to look up
 * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
 * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 */
Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {

    /* istanbul ignore next */
    if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = undefined;
    } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [ filterTypes ];

    if (util.isString(path) && path.length) {
        if (path === ".")
            return this.root;
        path = path.split(".");
    } else if (!path.length)
        return this;

    // Start at root if path is absolute
    if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);

    // Test if the first part matches any nested object, and if so, traverse if path contains more
    var found = this.get(path[0]);
    if (found) {
        if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
                return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
            return found;

    // Otherwise try each nested namespace
    } else
        for (var i = 0; i < this.nestedArray.length; ++i)
            if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
                return found;

    // If there hasn't been a match, try again at the parent
    if (this.parent === null || parentAlreadyChecked)
        return null;
    return this.parent.lookup(path, filterTypes);
};

/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @name NamespaceBase#lookup
 * @function
 * @param {string|string[]} path Path to look up
 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 * @variation 2
 */
// lookup(path: string, [parentAlreadyChecked: boolean])

/**
 * Looks up the {@link Type|type} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type
 * @throws {Error} If `path` does not point to a type
 */
Namespace.prototype.lookupType = function lookupType(path) {
    var found = this.lookup(path, [ Type ]);
    if (!found)
        throw Error("no such type: " + path);
    return found;
};

/**
 * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Enum} Looked up enum
 * @throws {Error} If `path` does not point to an enum
 */
Namespace.prototype.lookupEnum = function lookupEnum(path) {
    var found = this.lookup(path, [ Enum ]);
    if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type or enum
 * @throws {Error} If `path` does not point to a type or enum
 */
Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
    var found = this.lookup(path, [ Type, Enum ]);
    if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Service|service} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Service} Looked up service
 * @throws {Error} If `path` does not point to a service
 */
Namespace.prototype.lookupService = function lookupService(path) {
    var found = this.lookup(path, [ Service ]);
    if (!found)
        throw Error("no such Service '" + path + "' in " + this);
    return found;
};

// Sets up cyclic dependencies (called in index-light)
Namespace._configure = function(Type_, Service_, Enum_) {
    Type    = Type_;
    Service = Service_;
    Enum    = Enum_;
};

},{"./field":29,"./object":37,"./util":50}],37:[function(require,module,exports){
"use strict";
module.exports = ReflectionObject;

ReflectionObject.className = "ReflectionObject";

var util = require("./util");

var Root; // cyclic

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */
function ReflectionObject(name, options) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (options && !util.isObject(options))
        throw TypeError("options must be an object");

    /**
     * Options.
     * @type {Object.<string,*>|undefined}
     */
    this.options = options; // toJSON

    /**
     * Unique name within its namespace.
     * @type {string}
     */
    this.name = name;

    /**
     * Parent namespace.
     * @type {Namespace|null}
     */
    this.parent = null;

    /**
     * Whether already resolved or not.
     * @type {boolean}
     */
    this.resolved = false;

    /**
     * Comment text, if any.
     * @type {string|null}
     */
    this.comment = null;

    /**
     * Defining file name.
     * @type {string|null}
     */
    this.filename = null;
}

Object.defineProperties(ReflectionObject.prototype, {

    /**
     * Reference to the root namespace.
     * @name ReflectionObject#root
     * @type {Root}
     * @readonly
     */
    root: {
        get: function() {
            var ptr = this;
            while (ptr.parent !== null)
                ptr = ptr.parent;
            return ptr;
        }
    },

    /**
     * Full name including leading dot.
     * @name ReflectionObject#fullName
     * @type {string}
     * @readonly
     */
    fullName: {
        get: function() {
            var path = [ this.name ],
                ptr = this.parent;
            while (ptr) {
                path.unshift(ptr.name);
                ptr = ptr.parent;
            }
            return path.join(".");
        }
    }
});

/**
 * Converts this reflection object to its descriptor representation.
 * @returns {Object.<string,*>} Descriptor
 * @abstract
 */
ReflectionObject.prototype.toJSON = /* istanbul ignore next */ function toJSON() {
    throw Error(); // not implemented, shouldn't happen
};

/**
 * Called when this object is added to a parent.
 * @param {ReflectionObject} parent Parent added to
 * @returns {undefined}
 */
ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
        this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root = parent.root;
    if (root instanceof Root)
        root._handleAdd(this);
};

/**
 * Called when this object is removed from a parent.
 * @param {ReflectionObject} parent Parent removed from
 * @returns {undefined}
 */
ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root = parent.root;
    if (root instanceof Root)
        root._handleRemove(this);
    this.parent = null;
    this.resolved = false;
};

/**
 * Resolves this objects type references.
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;
    if (this.root instanceof Root)
        this.resolved = true; // only if part of a root
    return this;
};

/**
 * Gets an option value.
 * @param {string} name Option name
 * @returns {*} Option value or `undefined` if not set
 */
ReflectionObject.prototype.getOption = function getOption(name) {
    if (this.options)
        return this.options[name];
    return undefined;
};

/**
 * Sets an option.
 * @param {string} name Option name
 * @param {*} value Option value
 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (!ifNotSet || !this.options || this.options[name] === undefined)
        (this.options || (this.options = {}))[name] = value;
    return this;
};

/**
 * Sets multiple options.
 * @param {Object.<string,*>} options Options to set
 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
            this.setOption(keys[i], options[keys[i]], ifNotSet);
    return this;
};

/**
 * Converts this instance to its string representation.
 * @returns {string} Class name[, space, full name]
 */
ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className,
        fullName  = this.fullName;
    if (fullName.length)
        return className + " " + fullName;
    return className;
};

// Sets up cyclic dependencies (called in index-light)
ReflectionObject._configure = function(Root_) {
    Root = Root_;
};

},{"./util":50}],38:[function(require,module,exports){
"use strict";
module.exports = OneOf;

// extends ReflectionObject
var ReflectionObject = require("./object");
((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

var Field = require("./field"),
    util  = require("./util");

/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object.<string,*>} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */
function OneOf(name, fieldNames, options, comment) {
    if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = undefined;
    }
    ReflectionObject.call(this, name, options);

    /* istanbul ignore if */
    if (!(fieldNames === undefined || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");

    /**
     * Field names that belong to this oneof.
     * @type {string[]}
     */
    this.oneof = fieldNames || []; // toJSON, marker

    /**
     * Fields that belong to this oneof as an array for iteration.
     * @type {Field[]}
     * @readonly
     */
    this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

    /**
     * Comment for this field.
     * @type {string|null}
     */
    this.comment = comment;
}

/**
 * Oneof descriptor.
 * @interface IOneOf
 * @property {Array.<string>} oneof Oneof field names
 * @property {Object.<string,*>} [options] Oneof options
 */

/**
 * Constructs a oneof from a oneof descriptor.
 * @param {string} name Oneof name
 * @param {IOneOf} json Oneof descriptor
 * @returns {OneOf} Created oneof
 * @throws {TypeError} If arguments are invalid
 */
OneOf.fromJSON = function fromJSON(name, json) {
    return new OneOf(name, json.oneof, json.options, json.comment);
};

/**
 * Converts this oneof to a oneof descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IOneOf} Oneof descriptor
 */
OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options" , this.options,
        "oneof"   , this.oneof,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Adds the fields of the specified oneof to the parent if not already done so.
 * @param {OneOf} oneof The oneof
 * @returns {undefined}
 * @inner
 * @ignore
 */
function addFieldsToParent(oneof) {
    if (oneof.parent)
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
            if (!oneof.fieldsArray[i].parent)
                oneof.parent.add(oneof.fieldsArray[i]);
}

/**
 * Adds a field to this oneof and removes it from its current parent, if any.
 * @param {Field} field Field to add
 * @returns {OneOf} `this`
 */
OneOf.prototype.add = function add(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
    this.oneof.push(field.name);
    this.fieldsArray.push(field);
    field.partOf = this; // field.parent remains null
    addFieldsToParent(this);
    return this;
};

/**
 * Removes a field from this oneof and puts it back to the oneof's parent.
 * @param {Field} field Field to remove
 * @returns {OneOf} `this`
 */
OneOf.prototype.remove = function remove(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    var index = this.fieldsArray.indexOf(field);

    /* istanbul ignore if */
    if (index < 0)
        throw Error(field + " is not a member of " + this);

    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field.name);

    /* istanbul ignore else */
    if (index > -1) // theoretical
        this.oneof.splice(index, 1);

    field.partOf = null;
    return this;
};

/**
 * @override
 */
OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self = this;
    // Collect present fields
    for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
            field.partOf = self;
            self.fieldsArray.push(field);
        }
    }
    // Add not yet present fields
    addFieldsToParent(this);
};

/**
 * @override
 */
OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
            field.parent.remove(field);
    ReflectionObject.prototype.onRemove.call(this, parent);
};

/**
 * Decorator function as returned by {@link OneOf.d} (TypeScript).
 * @typedef OneOfDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} oneofName OneOf name
 * @returns {undefined}
 */

/**
 * OneOf decorator (TypeScript).
 * @function
 * @param {...string} fieldNames Field names
 * @returns {OneOfDecorator} Decorator function
 * @template T extends string
 */
OneOf.d = function decorateOneOf() {
    var fieldNames = new Array(arguments.length),
        index = 0;
    while (index < arguments.length)
        fieldNames[index] = arguments[index++];
    return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor)
            .add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
            get: util.oneOfGetter(fieldNames),
            set: util.oneOfSetter(fieldNames)
        });
    };
};

},{"./field":29,"./object":37,"./util":50}],39:[function(require,module,exports){
"use strict";
module.exports = parse;

parse.filename = null;
parse.defaults = { keepCase: false };

var tokenize  = require("./tokenize"),
    Root      = require("./root"),
    Type      = require("./type"),
    Field     = require("./field"),
    MapField  = require("./mapfield"),
    OneOf     = require("./oneof"),
    Enum      = require("./enum"),
    Service   = require("./service"),
    Method    = require("./method"),
    types     = require("./types"),
    util      = require("./util");

var base10Re    = /^[1-9][0-9]*$/,
    base10NegRe = /^-?[1-9][0-9]*$/,
    base16Re    = /^0[x][0-9a-fA-F]+$/,
    base16NegRe = /^-?0[x][0-9a-fA-F]+$/,
    base8Re     = /^0[0-7]+$/,
    base8NegRe  = /^-?0[0-7]+$/,
    numberRe    = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
    nameRe      = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    typeRefRe   = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
    fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

/**
 * Result object returned from {@link parse}.
 * @interface IParserResult
 * @property {string|undefined} package Package name, if declared
 * @property {string[]|undefined} imports Imports, if any
 * @property {string[]|undefined} weakImports Weak imports, if any
 * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
 * @property {Root} root Populated root instance
 */

/**
 * Options modifying the behavior of {@link parse}.
 * @interface IParseOptions
 * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
 * @property {boolean} [alternateCommentMode=false] Recognize double-slash comments in addition to doc-block comments.
 */

/**
 * Options modifying the behavior of JSON serialization.
 * @interface IToJSONOptions
 * @property {boolean} [keepComments=false] Serializes comments.
 */

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @param {string} source Source contents
 * @param {Root} root Root to populate
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {IParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {IParseOptions} defaults Default {@link IParseOptions}
 */
function parse(source, root, options) {
    /* eslint-disable callback-return */
    if (!(root instanceof Root)) {
        options = root;
        root = new Root();
    }
    if (!options)
        options = parse.defaults;

    var tn = tokenize(source, options.alternateCommentMode || false),
        next = tn.next,
        push = tn.push,
        peek = tn.peek,
        skip = tn.skip,
        cmnt = tn.cmnt;

    var head = true,
        pkg,
        imports,
        weakImports,
        syntax,
        isProto3 = false;

    var ptr = root;

    var applyCase = options.keepCase ? function(name) { return name; } : util.camelCase;

    /* istanbul ignore next */
    function illegal(token, name, insideTryCatch) {
        var filename = parse.filename;
        if (!insideTryCatch)
            parse.filename = null;
        return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
    }

    function readString() {
        var values = [],
            token;
        do {
            /* istanbul ignore if */
            if ((token = next()) !== "\"" && token !== "'")
                throw illegal(token);

            values.push(next());
            skip(token);
            token = peek();
        } while (token === "\"" || token === "'");
        return values.join("");
    }

    function readValue(acceptTypeRef) {
        var token = next();
        switch (token) {
            case "'":
            case "\"":
                push(token);
                return readString();
            case "true": case "TRUE":
                return true;
            case "false": case "FALSE":
                return false;
        }
        try {
            return parseNumber(token, /* insideTryCatch */ true);
        } catch (e) {

            /* istanbul ignore else */
            if (acceptTypeRef && typeRefRe.test(token))
                return token;

            /* istanbul ignore next */
            throw illegal(token, "value");
        }
    }

    function readRanges(target, acceptStrings) {
        var token, start;
        do {
            if (acceptStrings && ((token = peek()) === "\"" || token === "'"))
                target.push(readString());
            else
                target.push([ start = parseId(next()), skip("to", true) ? parseId(next()) : start ]);
        } while (skip(",", true));
        skip(";");
    }

    function parseNumber(token, insideTryCatch) {
        var sign = 1;
        if (token.charAt(0) === "-") {
            sign = -1;
            token = token.substring(1);
        }
        switch (token) {
            case "inf": case "INF": case "Inf":
                return sign * Infinity;
            case "nan": case "NAN": case "Nan": case "NaN":
                return NaN;
            case "0":
                return 0;
        }
        if (base10Re.test(token))
            return sign * parseInt(token, 10);
        if (base16Re.test(token))
            return sign * parseInt(token, 16);
        if (base8Re.test(token))
            return sign * parseInt(token, 8);

        /* istanbul ignore else */
        if (numberRe.test(token))
            return sign * parseFloat(token);

        /* istanbul ignore next */
        throw illegal(token, "number", insideTryCatch);
    }

    function parseId(token, acceptNegative) {
        switch (token) {
            case "max": case "MAX": case "Max":
                return 536870911;
            case "0":
                return 0;
        }

        /* istanbul ignore if */
        if (!acceptNegative && token.charAt(0) === "-")
            throw illegal(token, "id");

        if (base10NegRe.test(token))
            return parseInt(token, 10);
        if (base16NegRe.test(token))
            return parseInt(token, 16);

        /* istanbul ignore else */
        if (base8NegRe.test(token))
            return parseInt(token, 8);

        /* istanbul ignore next */
        throw illegal(token, "id");
    }

    function parsePackage() {

        /* istanbul ignore if */
        if (pkg !== undefined)
            throw illegal("package");

        pkg = next();

        /* istanbul ignore if */
        if (!typeRefRe.test(pkg))
            throw illegal(pkg, "name");

        ptr = ptr.define(pkg);
        skip(";");
    }

    function parseImport() {
        var token = peek();
        var whichImports;
        switch (token) {
            case "weak":
                whichImports = weakImports || (weakImports = []);
                next();
                break;
            case "public":
                next();
                // eslint-disable-line no-fallthrough
            default:
                whichImports = imports || (imports = []);
                break;
        }
        token = readString();
        skip(";");
        whichImports.push(token);
    }

    function parseSyntax() {
        skip("=");
        syntax = readString();
        isProto3 = syntax === "proto3";

        /* istanbul ignore if */
        if (!isProto3 && syntax !== "proto2")
            throw illegal(syntax, "syntax");

        skip(";");
    }

    function parseCommon(parent, token) {
        switch (token) {

            case "option":
                parseOption(parent, token);
                skip(";");
                return true;

            case "message":
                parseType(parent, token);
                return true;

            case "enum":
                parseEnum(parent, token);
                return true;

            case "service":
                parseService(parent, token);
                return true;

            case "extend":
                parseExtension(parent, token);
                return true;
        }
        return false;
    }

    function ifBlock(obj, fnIf, fnElse) {
        var trailingLine = tn.line;
        if (obj) {
            obj.comment = cmnt(); // try block-type comment
            obj.filename = parse.filename;
        }
        if (skip("{", true)) {
            var token;
            while ((token = next()) !== "}")
                fnIf(token);
            skip(";", true);
        } else {
            if (fnElse)
                fnElse();
            skip(";");
            if (obj && typeof obj.comment !== "string")
                obj.comment = cmnt(trailingLine); // try line-type comment if no block
        }
    }

    function parseType(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "type name");

        var type = new Type(token);
        ifBlock(type, function parseType_block(token) {
            if (parseCommon(type, token))
                return;

            switch (token) {

                case "map":
                    parseMapField(type, token);
                    break;

                case "required":
                case "optional":
                case "repeated":
                    parseField(type, token);
                    break;

                case "oneof":
                    parseOneOf(type, token);
                    break;

                case "extensions":
                    readRanges(type.extensions || (type.extensions = []));
                    break;

                case "reserved":
                    readRanges(type.reserved || (type.reserved = []), true);
                    break;

                default:
                    /* istanbul ignore if */
                    if (!isProto3 || !typeRefRe.test(token))
                        throw illegal(token);

                    push(token);
                    parseField(type, "optional");
                    break;
            }
        });
        parent.add(type);
    }

    function parseField(parent, rule, extend) {
        var type = next();
        if (type === "group") {
            parseGroup(parent, rule);
            return;
        }

        /* istanbul ignore if */
        if (!typeRefRe.test(type))
            throw illegal(type, "type");

        var name = next();

        /* istanbul ignore if */
        if (!nameRe.test(name))
            throw illegal(name, "name");

        name = applyCase(name);
        skip("=");

        var field = new Field(name, parseId(next()), type, rule, extend);
        ifBlock(field, function parseField_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(field, token);
                skip(";");
            } else
                throw illegal(token);

        }, function parseField_line() {
            parseInlineOptions(field);
        });
        parent.add(field);

        // JSON defaults to packed=true if not set so we have to set packed=false explicity when
        // parsing proto2 descriptors without the option, where applicable. This must be done for
        // all known packable types and anything that could be an enum (= is not a basic type).
        if (!isProto3 && field.repeated && (types.packed[type] !== undefined || types.basic[type] === undefined))
            field.setOption("packed", false, /* ifNotSet */ true);
    }

    function parseGroup(parent, rule) {
        var name = next();

        /* istanbul ignore if */
        if (!nameRe.test(name))
            throw illegal(name, "name");

        var fieldName = util.lcFirst(name);
        if (name === fieldName)
            name = util.ucFirst(name);
        skip("=");
        var id = parseId(next());
        var type = new Type(name);
        type.group = true;
        var field = new Field(fieldName, id, name, rule);
        field.filename = parse.filename;
        ifBlock(type, function parseGroup_block(token) {
            switch (token) {

                case "option":
                    parseOption(type, token);
                    skip(";");
                    break;

                case "required":
                case "optional":
                case "repeated":
                    parseField(type, token);
                    break;

                /* istanbul ignore next */
                default:
                    throw illegal(token); // there are no groups with proto3 semantics
            }
        });
        parent.add(type)
              .add(field);
    }

    function parseMapField(parent) {
        skip("<");
        var keyType = next();

        /* istanbul ignore if */
        if (types.mapKey[keyType] === undefined)
            throw illegal(keyType, "type");

        skip(",");
        var valueType = next();

        /* istanbul ignore if */
        if (!typeRefRe.test(valueType))
            throw illegal(valueType, "type");

        skip(">");
        var name = next();

        /* istanbul ignore if */
        if (!nameRe.test(name))
            throw illegal(name, "name");

        skip("=");
        var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
        ifBlock(field, function parseMapField_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(field, token);
                skip(";");
            } else
                throw illegal(token);

        }, function parseMapField_line() {
            parseInlineOptions(field);
        });
        parent.add(field);
    }

    function parseOneOf(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "name");

        var oneof = new OneOf(applyCase(token));
        ifBlock(oneof, function parseOneOf_block(token) {
            if (token === "option") {
                parseOption(oneof, token);
                skip(";");
            } else {
                push(token);
                parseField(oneof, "optional");
            }
        });
        parent.add(oneof);
    }

    function parseEnum(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "name");

        var enm = new Enum(token);
        ifBlock(enm, function parseEnum_block(token) {
          switch(token) {
            case "option":
              parseOption(enm, token);
              skip(";");
              break;

            case "reserved":
              readRanges(enm.reserved || (enm.reserved = []), true);
              break;

            default:
              parseEnumValue(enm, token);
          }
        });
        parent.add(enm);
    }

    function parseEnumValue(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token))
            throw illegal(token, "name");

        skip("=");
        var value = parseId(next(), true),
            dummy = {};
        ifBlock(dummy, function parseEnumValue_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(dummy, token); // skip
                skip(";");
            } else
                throw illegal(token);

        }, function parseEnumValue_line() {
            parseInlineOptions(dummy); // skip
        });
        parent.add(token, value, dummy.comment);
    }

    function parseOption(parent, token) {
        var isCustom = skip("(", true);

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token, "name");

        var name = token;
        if (isCustom) {
            skip(")");
            name = "(" + name + ")";
            token = peek();
            if (fqTypeRefRe.test(token)) {
                name += token;
                next();
            }
        }
        skip("=");
        parseOptionValue(parent, name);
    }

    function parseOptionValue(parent, name) {
        if (skip("{", true)) { // { a: "foo" b { c: "bar" } }
            do {
                /* istanbul ignore if */
                if (!nameRe.test(token = next()))
                    throw illegal(token, "name");

                if (peek() === "{")
                    parseOptionValue(parent, name + "." + token);
                else {
                    skip(":");
                    if (peek() === "{")
                        parseOptionValue(parent, name + "." + token);
                    else
                        setOption(parent, name + "." + token, readValue(true));
                }
                skip(",", true);
            } while (!skip("}", true));
        } else
            setOption(parent, name, readValue(true));
        // Does not enforce a delimiter to be universal
    }

    function setOption(parent, name, value) {
        if (parent.setOption)
            parent.setOption(name, value);
    }

    function parseInlineOptions(parent) {
        if (skip("[", true)) {
            do {
                parseOption(parent, "option");
            } while (skip(",", true));
            skip("]");
        }
        return parent;
    }

    function parseService(parent, token) {

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "service name");

        var service = new Service(token);
        ifBlock(service, function parseService_block(token) {
            if (parseCommon(service, token))
                return;

            /* istanbul ignore else */
            if (token === "rpc")
                parseMethod(service, token);
            else
                throw illegal(token);
        });
        parent.add(service);
    }

    function parseMethod(parent, token) {
        var type = token;

        /* istanbul ignore if */
        if (!nameRe.test(token = next()))
            throw illegal(token, "name");

        var name = token,
            requestType, requestStream,
            responseType, responseStream;

        skip("(");
        if (skip("stream", true))
            requestStream = true;

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token);

        requestType = token;
        skip(")"); skip("returns"); skip("(");
        if (skip("stream", true))
            responseStream = true;

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token);

        responseType = token;
        skip(")");

        var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
        ifBlock(method, function parseMethod_block(token) {

            /* istanbul ignore else */
            if (token === "option") {
                parseOption(method, token);
                skip(";");
            } else
                throw illegal(token);

        });
        parent.add(method);
    }

    function parseExtension(parent, token) {

        /* istanbul ignore if */
        if (!typeRefRe.test(token = next()))
            throw illegal(token, "reference");

        var reference = token;
        ifBlock(null, function parseExtension_block(token) {
            switch (token) {

                case "required":
                case "repeated":
                case "optional":
                    parseField(parent, token, reference);
                    break;

                default:
                    /* istanbul ignore if */
                    if (!isProto3 || !typeRefRe.test(token))
                        throw illegal(token);
                    push(token);
                    parseField(parent, "optional", reference);
                    break;
            }
        });
    }

    var token;
    while ((token = next()) !== null) {
        switch (token) {

            case "package":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parsePackage();
                break;

            case "import":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parseImport();
                break;

            case "syntax":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parseSyntax();
                break;

            case "option":

                /* istanbul ignore if */
                if (!head)
                    throw illegal(token);

                parseOption(ptr, token);
                skip(";");
                break;

            default:

                /* istanbul ignore else */
                if (parseCommon(ptr, token)) {
                    head = false;
                    continue;
                }

                /* istanbul ignore next */
                throw illegal(token);
        }
    }

    parse.filename = null;
    return {
        "package"     : pkg,
        "imports"     : imports,
         weakImports  : weakImports,
         syntax       : syntax,
         root         : root
    };
}

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @name parse
 * @function
 * @param {string} source Source contents
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {IParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {IParseOptions} defaults Default {@link IParseOptions}
 * @variation 2
 */

},{"./enum":28,"./field":29,"./mapfield":33,"./method":35,"./oneof":38,"./root":42,"./service":46,"./tokenize":47,"./type":48,"./types":49,"./util":50}],40:[function(require,module,exports){
"use strict";
module.exports = Reader;

var util      = require("./util/minimal");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};

},{"./util/minimal":52}],41:[function(require,module,exports){
"use strict";
module.exports = BufferReader;

// extends Reader
var Reader = require("./reader");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = require("./util/minimal");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

},{"./reader":40,"./util/minimal":52}],42:[function(require,module,exports){
"use strict";
module.exports = Root;

// extends Namespace
var Namespace = require("./namespace");
((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

var Field   = require("./field"),
    Enum    = require("./enum"),
    OneOf   = require("./oneof"),
    util    = require("./util");

var Type,   // cyclic
    parse,  // might be excluded
    common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */
function Root(options) {
    Namespace.call(this, "", options);

    /**
     * Deferred extension fields.
     * @type {Field[]}
     */
    this.deferred = [];

    /**
     * Resolved file names of loaded files.
     * @type {string[]}
     */
    this.files = [];
}

/**
 * Loads a namespace descriptor into a root namespace.
 * @param {INamespace} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @returns {Root} Root namespace
 */
Root.fromJSON = function fromJSON(json, root) {
    if (!root)
        root = new Root();
    if (json.options)
        root.setOptions(json.options);
    return root.addJSON(json.nested);
};

/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {string|null} Resolved path to `target` or `null` to skip the file
 */
Root.prototype.resolvePath = util.path.resolve;

// A symbol-like function to safely signal synchronous loading
/* istanbul ignore next */
function SYNC() {} // eslint-disable-line no-empty-function

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} options Parse options
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 */
Root.prototype.load = function load(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = undefined;
    }
    var self = this;
    if (!callback)
        return util.asPromise(load, self, filename, options);

    var sync = callback === SYNC; // undocumented

    // Finishes loading by calling the callback (exactly once)
    function finish(err, root) {
        /* istanbul ignore if */
        if (!callback)
            return;
        var cb = callback;
        callback = null;
        if (sync)
            throw err;
        cb(err, root);
    }

    // Processes a single file
    function process(filename, source) {
        try {
            if (util.isString(source) && source.charAt(0) === "{")
                source = JSON.parse(source);
            if (!util.isString(source))
                self.setOptions(source.options).addJSON(source.nested);
            else {
                parse.filename = filename;
                var parsed = parse(source, self, options),
                    resolved,
                    i = 0;
                if (parsed.imports)
                    for (; i < parsed.imports.length; ++i)
                        if (resolved = self.resolvePath(filename, parsed.imports[i]))
                            fetch(resolved);
                if (parsed.weakImports)
                    for (i = 0; i < parsed.weakImports.length; ++i)
                        if (resolved = self.resolvePath(filename, parsed.weakImports[i]))
                            fetch(resolved, true);
            }
        } catch (err) {
            finish(err);
        }
        if (!sync && !queued)
            finish(null, self); // only once anyway
    }

    // Fetches a single file
    function fetch(filename, weak) {

        // Strip path if this file references a bundled definition
        var idx = filename.lastIndexOf("google/protobuf/");
        if (idx > -1) {
            var altname = filename.substring(idx);
            if (altname in common)
                filename = altname;
        }

        // Skip if already loaded / attempted
        if (self.files.indexOf(filename) > -1)
            return;
        self.files.push(filename);

        // Shortcut bundled definitions
        if (filename in common) {
            if (sync)
                process(filename, common[filename]);
            else {
                ++queued;
                setTimeout(function() {
                    --queued;
                    process(filename, common[filename]);
                });
            }
            return;
        }

        // Otherwise fetch from disk or network
        if (sync) {
            var source;
            try {
                source = util.fs.readFileSync(filename).toString("utf8");
            } catch (err) {
                if (!weak)
                    finish(err);
                return;
            }
            process(filename, source);
        } else {
            ++queued;
            util.fetch(filename, function(err, source) {
                --queued;
                /* istanbul ignore if */
                if (!callback)
                    return; // terminated meanwhile
                if (err) {
                    /* istanbul ignore else */
                    if (!weak)
                        finish(err);
                    else if (!queued) // can't be covered reliably
                        finish(null, self);
                    return;
                }
                process(filename, source);
            });
        }
    }
    var queued = 0;

    // Assembling the root namespace doesn't require working type
    // references anymore, so we can load everything in parallel
    if (util.isString(filename))
        filename = [ filename ];
    for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self.resolvePath("", filename[i]))
            fetch(resolved);

    if (sync)
        return self;
    if (!queued)
        finish(null, self);
    return undefined;
};
// function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Promise<Root>} Promise
 * @variation 3
 */
// function load(filename:string, [options:IParseOptions]):Promise<Root>

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
 * @function Root#loadSync
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 */
Root.prototype.loadSync = function loadSync(filename, options) {
    if (!util.isNode)
        throw Error("not supported");
    return this.load(filename, options, SYNC);
};

/**
 * @override
 */
Root.prototype.resolveAll = function resolveAll() {
    if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
};

// only uppercased (and thus conflict-free) children are exposed, see below
var exposeRe = /^[A-Z]/;

/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */
function tryHandleExtension(root, field) {
    var extendedType = field.parent.lookup(field.extend);
    if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
    }
    return false;
}

/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */
Root.prototype._handleAdd = function _handleAdd(object) {
    if (object instanceof Field) {

        if (/* an extension field (implies not part of a oneof) */ object.extend !== undefined && /* not already handled */ !object.extensionField)
            if (!tryHandleExtension(this, object))
                this.deferred.push(object);

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            object.parent[object.name] = object.values; // expose enum values as property of its parent

    } else if (!(object instanceof OneOf)) /* everything else is a namespace */ {

        if (object instanceof Type) // Try to handle any deferred extensions
            for (var i = 0; i < this.deferred.length;)
                if (tryHandleExtension(this, this.deferred[i]))
                    this.deferred.splice(i, 1);
                else
                    ++i;
        for (var j = 0; j < /* initializes */ object.nestedArray.length; ++j) // recurse into the namespace
            this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
            object.parent[object.name] = object; // expose namespace as property of its parent
    }

    // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
    // properties of namespaces just like static code does. This allows using a .d.ts generated for
    // a static module with reflection-based solutions where the condition is met.
};

/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */
Root.prototype._handleRemove = function _handleRemove(object) {
    if (object instanceof Field) {

        if (/* an extension field */ object.extend !== undefined) {
            if (/* already handled */ object.extensionField) { // remove its sister field
                object.extensionField.parent.remove(object.extensionField);
                object.extensionField = null;
            } else { // cancel the extension
                var index = this.deferred.indexOf(object);
                /* istanbul ignore else */
                if (index > -1)
                    this.deferred.splice(index, 1);
            }
        }

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose enum values

    } else if (object instanceof Namespace) {

        for (var i = 0; i < /* initializes */ object.nestedArray.length; ++i) // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose namespaces

    }
};

// Sets up cyclic dependencies (called in index-light)
Root._configure = function(Type_, parse_, common_) {
    Type   = Type_;
    parse  = parse_;
    common = common_;
};

},{"./enum":28,"./field":29,"./namespace":36,"./oneof":38,"./util":50}],43:[function(require,module,exports){
"use strict";
module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */

},{}],44:[function(require,module,exports){
"use strict";

/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = require("./rpc/service");

},{"./rpc/service":45}],45:[function(require,module,exports){
"use strict";
module.exports = Service;

var util = require("../util/minimal");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};

},{"../util/minimal":52}],46:[function(require,module,exports){
"use strict";
module.exports = Service;

// extends Namespace
var Namespace = require("./namespace");
((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

var Method = require("./method"),
    util   = require("./util"),
    rpc    = require("./rpc");

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
function Service(name, options) {
    Namespace.call(this, name, options);

    /**
     * Service methods.
     * @type {Object.<string,Method>}
     */
    this.methods = {}; // toJSON, marker

    /**
     * Cached methods as an array.
     * @type {Method[]|null}
     * @private
     */
    this._methodsArray = null;
}

/**
 * Service descriptor.
 * @interface IService
 * @extends INamespace
 * @property {Object.<string,IMethod>} methods Method descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {IService} json Service descriptor
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */
Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    /* istanbul ignore else */
    if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
            service.add(Method.fromJSON(names[i], json.methods[names[i]]));
    if (json.nested)
        service.addJSON(json.nested);
    service.comment = json.comment;
    return service;
};

/**
 * Converts this service to a service descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IService} Service descriptor
 */
Service.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options" , inherited && inherited.options || undefined,
        "methods" , Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */ {},
        "nested"  , inherited && inherited.nested || undefined,
        "comment" , keepComments ? this.comment : undefined
    ]);
};

/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */
Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
});

function clearCache(service) {
    service._methodsArray = null;
    return service;
}

/**
 * @override
 */
Service.prototype.get = function get(name) {
    return this.methods[name]
        || Namespace.prototype.get.call(this, name);
};

/**
 * @override
 */
Service.prototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
    return Namespace.prototype.resolve.call(this);
};

/**
 * @override
 */
Service.prototype.add = function add(object) {

    /* istanbul ignore if */
    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * @override
 */
Service.prototype.remove = function remove(object) {
    if (object instanceof Method) {

        /* istanbul ignore if */
        if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */
Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i = 0, method; i < /* initializes */ this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = util.codegen(["r","c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
            m: method,
            q: method.resolvedRequestType.ctor,
            s: method.resolvedResponseType.ctor
        });
    }
    return rpcService;
};

},{"./method":35,"./namespace":36,"./rpc":44,"./util":50}],47:[function(require,module,exports){
"use strict";
module.exports = tokenize;

var delimRe        = /[\s{}=;:[\],'"()<>]/g,
    stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
    stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;

var setCommentRe = /^ *[*/]+ */,
    setCommentAltRe = /^\s*\*?\/*/,
    setCommentSplitRe = /\n/g,
    whitespaceRe = /\s/,
    unescapeRe = /\\(.?)/g;

var unescapeMap = {
    "0": "\0",
    "r": "\r",
    "n": "\n",
    "t": "\t"
};

/**
 * Unescapes a string.
 * @param {string} str String to unescape
 * @returns {string} Unescaped string
 * @property {Object.<string,string>} map Special characters map
 * @memberof tokenize
 */
function unescape(str) {
    return str.replace(unescapeRe, function($0, $1) {
        switch ($1) {
            case "\\":
            case "":
                return $1;
            default:
                return unescapeMap[$1] || "";
        }
    });
}

tokenize.unescape = unescape;

/**
 * Gets the next token and advances.
 * @typedef TokenizerHandleNext
 * @type {function}
 * @returns {string|null} Next token or `null` on eof
 */

/**
 * Peeks for the next token.
 * @typedef TokenizerHandlePeek
 * @type {function}
 * @returns {string|null} Next token or `null` on eof
 */

/**
 * Pushes a token back to the stack.
 * @typedef TokenizerHandlePush
 * @type {function}
 * @param {string} token Token
 * @returns {undefined}
 */

/**
 * Skips the next token.
 * @typedef TokenizerHandleSkip
 * @type {function}
 * @param {string} expected Expected token
 * @param {boolean} [optional=false] If optional
 * @returns {boolean} Whether the token matched
 * @throws {Error} If the token didn't match and is not optional
 */

/**
 * Gets the comment on the previous line or, alternatively, the line comment on the specified line.
 * @typedef TokenizerHandleCmnt
 * @type {function}
 * @param {number} [line] Line number
 * @returns {string|null} Comment text or `null` if none
 */

/**
 * Handle object returned from {@link tokenize}.
 * @interface ITokenizerHandle
 * @property {TokenizerHandleNext} next Gets the next token and advances (`null` on eof)
 * @property {TokenizerHandlePeek} peek Peeks for the next token (`null` on eof)
 * @property {TokenizerHandlePush} push Pushes a token back to the stack
 * @property {TokenizerHandleSkip} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
 * @property {TokenizerHandleCmnt} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
 * @property {number} line Current line number
 */

/**
 * Tokenizes the given .proto source and returns an object with useful utility functions.
 * @param {string} source Source contents
 * @param {boolean} alternateCommentMode Whether we should activate alternate comment parsing mode.
 * @returns {ITokenizerHandle} Tokenizer handle
 */
function tokenize(source, alternateCommentMode) {
    /* eslint-disable callback-return */
    source = source.toString();

    var offset = 0,
        length = source.length,
        line = 1,
        commentType = null,
        commentText = null,
        commentLine = 0,
        commentLineEmpty = false;

    var stack = [];

    var stringDelim = null;

    /* istanbul ignore next */
    /**
     * Creates an error for illegal syntax.
     * @param {string} subject Subject
     * @returns {Error} Error created
     * @inner
     */
    function illegal(subject) {
        return Error("illegal " + subject + " (line " + line + ")");
    }

    /**
     * Reads a string till its end.
     * @returns {string} String read
     * @inner
     */
    function readString() {
        var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
        re.lastIndex = offset - 1;
        var match = re.exec(source);
        if (!match)
            throw illegal("string");
        offset = re.lastIndex;
        push(stringDelim);
        stringDelim = null;
        return unescape(match[1]);
    }

    /**
     * Gets the character at `pos` within the source.
     * @param {number} pos Position
     * @returns {string} Character
     * @inner
     */
    function charAt(pos) {
        return source.charAt(pos);
    }

    /**
     * Sets the current comment text.
     * @param {number} start Start offset
     * @param {number} end End offset
     * @returns {undefined}
     * @inner
     */
    function setComment(start, end) {
        commentType = source.charAt(start++);
        commentLine = line;
        commentLineEmpty = false;
        var lookback;
        if (alternateCommentMode) {
            lookback = 2;  // alternate comment parsing: "//" or "/*"
        } else {
            lookback = 3;  // "///" or "/**"
        }
        var commentOffset = start - lookback,
            c;
        do {
            if (--commentOffset < 0 ||
                    (c = source.charAt(commentOffset)) === "\n") {
                commentLineEmpty = true;
                break;
            }
        } while (c === " " || c === "\t");
        var lines = source
            .substring(start, end)
            .split(setCommentSplitRe);
        for (var i = 0; i < lines.length; ++i)
            lines[i] = lines[i]
                .replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "")
                .trim();
        commentText = lines
            .join("\n")
            .trim();
    }

    function isDoubleSlashCommentLine(startOffset) {
        var endOffset = findEndOfLine(startOffset);

        // see if remaining line matches comment pattern
        var lineText = source.substring(startOffset, endOffset);
        // look for 1 or 2 slashes since startOffset would already point past
        // the first slash that started the comment.
        var isComment = /^\s*\/{1,2}/.test(lineText);
        return isComment;
    }

    function findEndOfLine(cursor) {
        // find end of cursor's line
        var endOffset = cursor;
        while (endOffset < length && charAt(endOffset) !== "\n") {
            endOffset++;
        }
        return endOffset;
    }

    /**
     * Obtains the next token.
     * @returns {string|null} Next token or `null` on eof
     * @inner
     */
    function next() {
        if (stack.length > 0)
            return stack.shift();
        if (stringDelim)
            return readString();
        var repeat,
            prev,
            curr,
            start,
            isDoc;
        do {
            if (offset === length)
                return null;
            repeat = false;
            while (whitespaceRe.test(curr = charAt(offset))) {
                if (curr === "\n")
                    ++line;
                if (++offset === length)
                    return null;
            }

            if (charAt(offset) === "/") {
                if (++offset === length) {
                    throw illegal("comment");
                }
                if (charAt(offset) === "/") { // Line
                    if (!alternateCommentMode) {
                        // check for triple-slash comment
                        isDoc = charAt(start = offset + 1) === "/";

                        while (charAt(++offset) !== "\n") {
                            if (offset === length) {
                                return null;
                            }
                        }
                        ++offset;
                        if (isDoc) {
                            setComment(start, offset - 1);
                        }
                        ++line;
                        repeat = true;
                    } else {
                        // check for double-slash comments, consolidating consecutive lines
                        start = offset;
                        isDoc = false;
                        if (isDoubleSlashCommentLine(offset)) {
                            isDoc = true;
                            do {
                                offset = findEndOfLine(offset);
                                if (offset === length) {
                                    break;
                                }
                                offset++;
                            } while (isDoubleSlashCommentLine(offset));
                        } else {
                            offset = Math.min(length, findEndOfLine(offset) + 1);
                        }
                        if (isDoc) {
                            setComment(start, offset);
                        }
                        line++;
                        repeat = true;
                    }
                } else if ((curr = charAt(offset)) === "*") { /* Block */
                    // check for /** (regular comment mode) or /* (alternate comment mode)
                    start = offset + 1;
                    isDoc = alternateCommentMode || charAt(start) === "*";
                    do {
                        if (curr === "\n") {
                            ++line;
                        }
                        if (++offset === length) {
                            throw illegal("comment");
                        }
                        prev = curr;
                        curr = charAt(offset);
                    } while (prev !== "*" || curr !== "/");
                    ++offset;
                    if (isDoc) {
                        setComment(start, offset - 2);
                    }
                    repeat = true;
                } else {
                    return "/";
                }
            }
        } while (repeat);

        // offset !== length if we got here

        var end = offset;
        delimRe.lastIndex = 0;
        var delim = delimRe.test(charAt(end++));
        if (!delim)
            while (end < length && !delimRe.test(charAt(end)))
                ++end;
        var token = source.substring(offset, offset = end);
        if (token === "\"" || token === "'")
            stringDelim = token;
        return token;
    }

    /**
     * Pushes a token back to the stack.
     * @param {string} token Token
     * @returns {undefined}
     * @inner
     */
    function push(token) {
        stack.push(token);
    }

    /**
     * Peeks for the next token.
     * @returns {string|null} Token or `null` on eof
     * @inner
     */
    function peek() {
        if (!stack.length) {
            var token = next();
            if (token === null)
                return null;
            push(token);
        }
        return stack[0];
    }

    /**
     * Skips a token.
     * @param {string} expected Expected token
     * @param {boolean} [optional=false] Whether the token is optional
     * @returns {boolean} `true` when skipped, `false` if not
     * @throws {Error} When a required token is not present
     * @inner
     */
    function skip(expected, optional) {
        var actual = peek(),
            equals = actual === expected;
        if (equals) {
            next();
            return true;
        }
        if (!optional)
            throw illegal("token '" + actual + "', '" + expected + "' expected");
        return false;
    }

    /**
     * Gets a comment.
     * @param {number} [trailingLine] Line number if looking for a trailing comment
     * @returns {string|null} Comment text
     * @inner
     */
    function cmnt(trailingLine) {
        var ret = null;
        if (trailingLine === undefined) {
            if (commentLine === line - 1 && (alternateCommentMode || commentType === "*" || commentLineEmpty)) {
                ret = commentText;
            }
        } else {
            /* istanbul ignore else */
            if (commentLine < trailingLine) {
                peek();
            }
            if (commentLine === trailingLine && !commentLineEmpty && (alternateCommentMode || commentType === "/")) {
                ret = commentText;
            }
        }
        return ret;
    }

    return Object.defineProperty({
        next: next,
        peek: peek,
        push: push,
        skip: skip,
        cmnt: cmnt
    }, "line", {
        get: function() { return line; }
    });
    /* eslint-enable callback-return */
}

},{}],48:[function(require,module,exports){
"use strict";
module.exports = Type;

// extends Namespace
var Namespace = require("./namespace");
((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

var Enum      = require("./enum"),
    OneOf     = require("./oneof"),
    Field     = require("./field"),
    MapField  = require("./mapfield"),
    Service   = require("./service"),
    Message   = require("./message"),
    Reader    = require("./reader"),
    Writer    = require("./writer"),
    util      = require("./util"),
    encoder   = require("./encoder"),
    decoder   = require("./decoder"),
    verifier  = require("./verifier"),
    converter = require("./converter"),
    wrappers  = require("./wrappers");

/**
 * Constructs a new reflected message type instance.
 * @classdesc Reflected message type.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Message name
 * @param {Object.<string,*>} [options] Declared options
 */
function Type(name, options) {
    Namespace.call(this, name, options);

    /**
     * Message fields.
     * @type {Object.<string,Field>}
     */
    this.fields = {};  // toJSON, marker

    /**
     * Oneofs declared within this namespace, if any.
     * @type {Object.<string,OneOf>}
     */
    this.oneofs = undefined; // toJSON

    /**
     * Extension ranges, if any.
     * @type {number[][]}
     */
    this.extensions = undefined; // toJSON

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    /*?
     * Whether this type is a legacy group.
     * @type {boolean|undefined}
     */
    this.group = undefined; // toJSON

    /**
     * Cached fields by id.
     * @type {Object.<number,Field>|null}
     * @private
     */
    this._fieldsById = null;

    /**
     * Cached fields as an array.
     * @type {Field[]|null}
     * @private
     */
    this._fieldsArray = null;

    /**
     * Cached oneofs as an array.
     * @type {OneOf[]|null}
     * @private
     */
    this._oneofsArray = null;

    /**
     * Cached constructor.
     * @type {Constructor<{}>}
     * @private
     */
    this._ctor = null;
}

Object.defineProperties(Type.prototype, {

    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {Object.<number,Field>}
     * @readonly
     */
    fieldsById: {
        get: function() {

            /* istanbul ignore if */
            if (this._fieldsById)
                return this._fieldsById;

            this._fieldsById = {};
            for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                var field = this.fields[names[i]],
                    id = field.id;

                /* istanbul ignore if */
                if (this._fieldsById[id])
                    throw Error("duplicate id " + id + " in " + this);

                this._fieldsById[id] = field;
            }
            return this._fieldsById;
        }
    },

    /**
     * Fields of this message as an array for iteration.
     * @name Type#fieldsArray
     * @type {Field[]}
     * @readonly
     */
    fieldsArray: {
        get: function() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
    },

    /**
     * Oneofs of this message as an array for iteration.
     * @name Type#oneofsArray
     * @type {OneOf[]}
     * @readonly
     */
    oneofsArray: {
        get: function() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
    },

    /**
     * The registered constructor, if any registered, otherwise a generic constructor.
     * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
     * @name Type#ctor
     * @type {Constructor<{}>}
     */
    ctor: {
        get: function() {
            return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {

            // Ensure proper prototype
            var prototype = ctor.prototype;
            if (!(prototype instanceof Message)) {
                (ctor.prototype = new Message()).constructor = ctor;
                util.merge(ctor.prototype, prototype);
            }

            // Classes and messages reference their reflected type
            ctor.$type = ctor.prototype.$type = this;

            // Mix in static methods
            util.merge(ctor, Message, true);

            this._ctor = ctor;

            // Messages have non-enumerable default values on their prototype
            var i = 0;
            for (; i < /* initializes */ this.fieldsArray.length; ++i)
                this._fieldsArray[i].resolve(); // ensures a proper value

            // Messages have non-enumerable getters and setters for each virtual oneof field
            var ctorProperties = {};
            for (i = 0; i < /* initializes */ this.oneofsArray.length; ++i)
                ctorProperties[this._oneofsArray[i].resolve().name] = {
                    get: util.oneOfGetter(this._oneofsArray[i].oneof),
                    set: util.oneOfSetter(this._oneofsArray[i].oneof)
                };
            if (i)
                Object.defineProperties(ctor.prototype, ctorProperties);
        }
    }
});

/**
 * Generates a constructor function for the specified type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
Type.generateConstructor = function generateConstructor(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen(["p"], mtype.name);
    // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype
    for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map) gen
            ("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen
            ("this%s=[]", util.safeProp(field.name));
    return gen
    ("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
        ("this[ks[i]]=p[ks[i]]");
    /* eslint-enable no-unexpected-multiline */
};

function clearCache(type) {
    type._fieldsById = type._fieldsArray = type._oneofsArray = null;
    delete type.encode;
    delete type.decode;
    delete type.verify;
    return type;
}

/**
 * Message type descriptor.
 * @interface IType
 * @extends INamespace
 * @property {Object.<string,IOneOf>} [oneofs] Oneof descriptors
 * @property {Object.<string,IField>} fields Field descriptors
 * @property {number[][]} [extensions] Extension ranges
 * @property {number[][]} [reserved] Reserved ranges
 * @property {boolean} [group=false] Whether a legacy group or not
 */

/**
 * Creates a message type from a message type descriptor.
 * @param {string} name Message name
 * @param {IType} json Message type descriptor
 * @returns {Type} Created message type
 */
Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    var names = Object.keys(json.fields),
        i = 0;
    for (; i < names.length; ++i)
        type.add(
            ( typeof json.fields[names[i]].keyType !== "undefined"
            ? MapField.fromJSON
            : Field.fromJSON )(names[i], json.fields[names[i]])
        );
    if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
            type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
    if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add( // most to least likely
                ( nested.id !== undefined
                ? Field.fromJSON
                : nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
    if (json.group)
        type.group = true;
    if (json.comment)
        type.comment = json.comment;
    return type;
};

/**
 * Converts this message type to a message type descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IType} Message type descriptor
 */
Type.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
        "options"    , inherited && inherited.options || undefined,
        "oneofs"     , Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields"     , Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) { return !obj.declaringField; }), toJSONOptions) || {},
        "extensions" , this.extensions && this.extensions.length ? this.extensions : undefined,
        "reserved"   , this.reserved && this.reserved.length ? this.reserved : undefined,
        "group"      , this.group || undefined,
        "nested"     , inherited && inherited.nested || undefined,
        "comment"    , keepComments ? this.comment : undefined
    ]);
};

/**
 * @override
 */
Type.prototype.resolveAll = function resolveAll() {
    var fields = this.fieldsArray, i = 0;
    while (i < fields.length)
        fields[i++].resolve();
    var oneofs = this.oneofsArray; i = 0;
    while (i < oneofs.length)
        oneofs[i++].resolve();
    return Namespace.prototype.resolveAll.call(this);
};

/**
 * @override
 */
Type.prototype.get = function get(name) {
    return this.fields[name]
        || this.oneofs && this.oneofs[name]
        || this.nested && this.nested[name]
        || null;
};

/**
 * Adds a nested object to this type.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
 */
Type.prototype.add = function add(object) {

    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Field && object.extend === undefined) {
        // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
        // The root object takes care of adding distinct sister-fields to the respective extended
        // type instead.

        // avoids calling the getter if not absolutely necessary because it's called quite frequently
        if (this._fieldsById ? /* istanbul ignore next */ this._fieldsById[object.id] : this.fieldsById[object.id])
            throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
            throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
            throw Error("name '" + object.name + "' is reserved in " + this);

        if (object.parent)
            object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {
        if (!this.oneofs)
            this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * Removes a nested object from this type.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this type
 */
Type.prototype.remove = function remove(object) {
    if (object instanceof Field && object.extend === undefined) {
        // See Type#add for the reason why extension fields are excluded here.

        /* istanbul ignore if */
        if (!this.fields || this.fields[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {

        /* istanbul ignore if */
        if (!this.oneofs || this.oneofs[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
};

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<{}>} Message instance
 */
Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
};

/**
 * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
 * @returns {Type} `this`
 */
Type.prototype.setup = function setup() {
    // Sets up everything at once so that the prototype chain does not have to be re-evaluated
    // multiple times (V8, soft-deopt prototype-check).

    var fullName = this.fullName,
        types    = [];
    for (var i = 0; i < /* initializes */ this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);

    // Replace setup methods with type-specific generated functions
    this.encode = encoder(this)({
        Writer : Writer,
        types  : types,
        util   : util
    });
    this.decode = decoder(this)({
        Reader : Reader,
        types  : types,
        util   : util
    });
    this.verify = verifier(this)({
        types : types,
        util  : util
    });
    this.fromObject = converter.fromObject(this)({
        types : types,
        util  : util
    });
    this.toObject = converter.toObject(this)({
        types : types,
        util  : util
    });

    // Inject custom wrappers for common types
    var wrapper = wrappers[fullName];
    if (wrapper) {
        var originalThis = Object.create(this);
        // if (wrapper.fromObject) {
            originalThis.fromObject = this.fromObject;
            this.fromObject = wrapper.fromObject.bind(originalThis);
        // }
        // if (wrapper.toObject) {
            originalThis.toObject = this.toObject;
            this.toObject = wrapper.toObject.bind(originalThis);
        // }
    }

    return this;
};

/**
 * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encode = function encode_setup(message, writer) {
    return this.setup().encode(message, writer); // overrides this method
};

/**
 * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
};

/**
 * Decodes a message of this type.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError<{}>} If required fields are missing
 */
Type.prototype.decode = function decode_setup(reader, length) {
    return this.setup().decode(reader, length); // overrides this method
};

/**
 * Decodes a message of this type preceeded by its byte length as a varint.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */
Type.prototype.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof Reader))
        reader = Reader.create(reader);
    return this.decode(reader, reader.uint32());
};

/**
 * Verifies that field values are valid and that required fields are present.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {null|string} `null` if valid, otherwise the reason why it is not
 */
Type.prototype.verify = function verify_setup(message) {
    return this.setup().verify(message); // overrides this method
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object to convert
 * @returns {Message<{}>} Message instance
 */
Type.prototype.fromObject = function fromObject(object) {
    return this.setup().fromObject(object);
};

/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @interface IConversionOptions
 * @property {Function} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {Function} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {Function} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
 * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
Type.prototype.toObject = function toObject(message, options) {
    return this.setup().toObject(message, options);
};

/**
 * Decorator function as returned by {@link Type.d} (TypeScript).
 * @typedef TypeDecorator
 * @type {function}
 * @param {Constructor<T>} target Target constructor
 * @returns {undefined}
 * @template T extends Message<T>
 */

/**
 * Type decorator (TypeScript).
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {TypeDecorator<T>} Decorator function
 * @template T extends Message<T>
 */
Type.d = function decorateType(typeName) {
    return function typeDecorator(target) {
        util.decorateType(target, typeName);
    };
};

},{"./converter":25,"./decoder":26,"./encoder":27,"./enum":28,"./field":29,"./mapfield":33,"./message":34,"./namespace":36,"./oneof":38,"./reader":40,"./service":46,"./util":50,"./verifier":53,"./wrappers":54,"./writer":55}],49:[function(require,module,exports){
"use strict";

/**
 * Common type constants.
 * @namespace
 */
var types = exports;

var util = require("./util");

var s = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];

function bake(values, offset) {
    var i = 0, o = {};
    offset |= 0;
    while (i < values.length) o[s[i + offset]] = values[i++];
    return o;
}

/**
 * Basic type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 * @property {number} bytes=2 Ldelim wire type
 */
types.basic = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2,
    /* bytes    */ 2
]);

/**
 * Basic type defaults.
 * @type {Object.<string,*>}
 * @const
 * @property {number} double=0 Double default
 * @property {number} float=0 Float default
 * @property {number} int32=0 Int32 default
 * @property {number} uint32=0 Uint32 default
 * @property {number} sint32=0 Sint32 default
 * @property {number} fixed32=0 Fixed32 default
 * @property {number} sfixed32=0 Sfixed32 default
 * @property {number} int64=0 Int64 default
 * @property {number} uint64=0 Uint64 default
 * @property {number} sint64=0 Sint32 default
 * @property {number} fixed64=0 Fixed64 default
 * @property {number} sfixed64=0 Sfixed64 default
 * @property {boolean} bool=false Bool default
 * @property {string} string="" String default
 * @property {Array.<number>} bytes=Array(0) Bytes default
 * @property {null} message=null Message default
 */
types.defaults = bake([
    /* double   */ 0,
    /* float    */ 0,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 0,
    /* sfixed32 */ 0,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 0,
    /* sfixed64 */ 0,
    /* bool     */ false,
    /* string   */ "",
    /* bytes    */ util.emptyArray,
    /* message  */ null
]);

/**
 * Basic long type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 */
types.long = bake([
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1
], 7);

/**
 * Allowed types for map keys with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 */
types.mapKey = bake([
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2
], 2);

/**
 * Allowed types for packed repeated fields with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 */
types.packed = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0
]);

},{"./util":50}],50:[function(require,module,exports){
"use strict";

/**
 * Various utility functions.
 * @namespace
 */
var util = module.exports = require("./util/minimal");

var roots = require("./roots");

var Type, // cyclic
    Enum;

util.codegen = require("@protobufjs/codegen");
util.fetch   = require("@protobufjs/fetch");
util.path    = require("@protobufjs/path");

/**
 * Node's fs module if available.
 * @type {Object.<string,*>}
 */
util.fs = util.inquire("fs");

/**
 * Converts an object's values to an array.
 * @param {Object.<string,*>} object Object to convert
 * @returns {Array.<*>} Converted array
 */
util.toArray = function toArray(object) {
    if (object) {
        var keys  = Object.keys(object),
            array = new Array(keys.length),
            index = 0;
        while (index < keys.length)
            array[index] = object[keys[index++]];
        return array;
    }
    return [];
};

/**
 * Converts an array of keys immediately followed by their respective value to an object, omitting undefined values.
 * @param {Array.<*>} array Array to convert
 * @returns {Object.<string,*>} Converted object
 */
util.toObject = function toObject(array) {
    var object = {},
        index  = 0;
    while (index < array.length) {
        var key = array[index++],
            val = array[index++];
        if (val !== undefined)
            object[key] = val;
    }
    return object;
};

var safePropBackslashRe = /\\/g,
    safePropQuoteRe     = /"/g;

/**
 * Tests whether the specified name is a reserved word in JS.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
util.isReserved = function isReserved(name) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
};

/**
 * Returns a safe property accessor for the specified property name.
 * @param {string} prop Property name
 * @returns {string} Safe accessor
 */
util.safeProp = function safeProp(prop) {
    if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
        return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
    return "." + prop;
};

/**
 * Converts the first character of a string to upper case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
};

var camelCaseRe = /_([a-z])/g;

/**
 * Converts a string to camel case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.camelCase = function camelCase(str) {
    return str.substring(0, 1)
         + str.substring(1)
               .replace(camelCaseRe, function($0, $1) { return $1.toUpperCase(); });
};

/**
 * Compares reflected fields by id.
 * @param {Field} a First field
 * @param {Field} b Second field
 * @returns {number} Comparison value
 */
util.compareFieldsById = function compareFieldsById(a, b) {
    return a.id - b.id;
};

/**
 * Decorator helper for types (TypeScript).
 * @param {Constructor<T>} ctor Constructor function
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {Type} Reflected type
 * @template T extends Message<T>
 * @property {Root} root Decorators root
 */
util.decorateType = function decorateType(ctor, typeName) {

    /* istanbul ignore if */
    if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
            util.decorateRoot.remove(ctor.$type);
            ctor.$type.name = typeName;
            util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
    }

    /* istanbul ignore next */
    if (!Type)
        Type = require("./type");

    var type = new Type(typeName || ctor.name);
    util.decorateRoot.add(type);
    type.ctor = ctor; // sets up .encode, .decode etc.
    Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
    Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
    return type;
};

var decorateEnumIndex = 0;

/**
 * Decorator helper for enums (TypeScript).
 * @param {Object} object Enum object
 * @returns {Enum} Reflected enum
 */
util.decorateEnum = function decorateEnum(object) {

    /* istanbul ignore if */
    if (object.$type)
        return object.$type;

    /* istanbul ignore next */
    if (!Enum)
        Enum = require("./enum");

    var enm = new Enum("Enum" + decorateEnumIndex++, object);
    util.decorateRoot.add(enm);
    Object.defineProperty(object, "$type", { value: enm, enumerable: false });
    return enm;
};

/**
 * Decorator root (TypeScript).
 * @name util.decorateRoot
 * @type {Root}
 * @readonly
 */
Object.defineProperty(util, "decorateRoot", {
    get: function() {
        return roots["decorated"] || (roots["decorated"] = new (require("./root"))());
    }
});

},{"./enum":28,"./root":42,"./roots":43,"./type":48,"./util/minimal":52,"@protobufjs/codegen":11,"@protobufjs/fetch":13,"@protobufjs/path":16}],51:[function(require,module,exports){
"use strict";
module.exports = LongBits;

var util = require("../util/minimal");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};

},{"../util/minimal":52}],52:[function(require,module,exports){
(function (global){
"use strict";
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = require("@protobufjs/aspromise");

// converts to / from base64 encoded strings
util.base64 = require("@protobufjs/base64");

// base class of rpc.Service
util.EventEmitter = require("@protobufjs/eventemitter");

// float handling accross browsers
util.float = require("@protobufjs/float");

// requires modules optionally and hides the call from bundlers
util.inquire = require("@protobufjs/inquire");

// converts to / from utf8 encoded strings
util.utf8 = require("@protobufjs/utf8");

// provides a node-like buffer pool in the browser
util.pool = require("@protobufjs/pool");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = require("./longbits");

// global object reference
util.global = typeof window !== "undefined" && window
           || typeof global !== "undefined" && global
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./longbits":51,"@protobufjs/aspromise":9,"@protobufjs/base64":10,"@protobufjs/eventemitter":12,"@protobufjs/float":14,"@protobufjs/inquire":15,"@protobufjs/pool":17,"@protobufjs/utf8":18}],53:[function(require,module,exports){
"use strict";
module.exports = verifier;

var Enum      = require("./enum"),
    util      = require("./util");

function invalid(field, expected) {
    return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:"+field.keyType+"}" : "") + " expected";
}

/**
 * Generates a partial value verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyValue(gen, field, fieldIndex, ref) {
    /* eslint-disable no-unexpected-multiline */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(%s){", ref)
                ("default:")
                    ("return%j", invalid(field, "enum value"));
            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen
                ("case %i:", field.resolvedType.values[keys[j]]);
            gen
                    ("break")
            ("}");
        } else {
            gen
            ("{")
                ("var e=types[%i].verify(%s);", fieldIndex, ref)
                ("if(e)")
                    ("return%j+e", field.name + ".")
            ("}");
        }
    } else {
        switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32": gen
                ("if(!util.isInteger(%s))", ref)
                    ("return%j", invalid(field, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)
                    ("return%j", invalid(field, "integer|Long"));
                break;
            case "float":
            case "double": gen
                ("if(typeof %s!==\"number\")", ref)
                    ("return%j", invalid(field, "number"));
                break;
            case "bool": gen
                ("if(typeof %s!==\"boolean\")", ref)
                    ("return%j", invalid(field, "boolean"));
                break;
            case "string": gen
                ("if(!util.isString(%s))", ref)
                    ("return%j", invalid(field, "string"));
                break;
            case "bytes": gen
                ("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)
                    ("return%j", invalid(field, "buffer"));
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a partial key verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyKey(gen, field, ref) {
    /* eslint-disable no-unexpected-multiline */
    switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32": gen
            ("if(!util.key32Re.test(%s))", ref)
                ("return%j", invalid(field, "integer key"));
            break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64": gen
            ("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
                ("return%j", invalid(field, "integer|Long key"));
            break;
        case "bool": gen
            ("if(!util.key2Re.test(%s))", ref)
                ("return%j", invalid(field, "boolean key"));
            break;
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a verifier specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function verifier(mtype) {
    /* eslint-disable no-unexpected-multiline */

    var gen = util.codegen(["m"], mtype.name + "$verify")
    ("if(typeof m!==\"object\"||m===null)")
        ("return%j", "object expected");
    var oneofs = mtype.oneofsArray,
        seenFirstField = {};
    if (oneofs.length) gen
    ("var p={}");

    for (var i = 0; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            ref   = "m" + util.safeProp(field.name);

        if (field.optional) gen
        ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null

        // map fields
        if (field.map) { gen
            ("if(!util.isObject(%s))", ref)
                ("return%j", invalid(field, "object"))
            ("var k=Object.keys(%s)", ref)
            ("for(var i=0;i<k.length;++i){");
                genVerifyKey(gen, field, "k[i]");
                genVerifyValue(gen, field, i, ref + "[k[i]]")
            ("}");

        // repeated fields
        } else if (field.repeated) { gen
            ("if(!Array.isArray(%s))", ref)
                ("return%j", invalid(field, "array"))
            ("for(var i=0;i<%s.length;++i){", ref);
                genVerifyValue(gen, field, i, ref + "[i]")
            ("}");

        // required or present fields
        } else {
            if (field.partOf) {
                var oneofProp = util.safeProp(field.partOf.name);
                if (seenFirstField[field.partOf.name] === 1) gen
            ("if(p%s===1)", oneofProp)
                ("return%j", field.partOf.name + ": multiple values");
                seenFirstField[field.partOf.name] = 1;
                gen
            ("p%s=1", oneofProp);
            }
            genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen
        ("}");
    }
    return gen
    ("return null");
    /* eslint-enable no-unexpected-multiline */
}
},{"./enum":28,"./util":50}],54:[function(require,module,exports){
"use strict";

/**
 * Wrappers for common types.
 * @type {Object.<string,IWrapper>}
 * @const
 */
var wrappers = exports;

var Message = require("./message");

/**
 * From object converter part of an {@link IWrapper}.
 * @typedef WrapperFromObjectConverter
 * @type {function}
 * @param {Object.<string,*>} object Plain object
 * @returns {Message<{}>} Message instance
 * @this Type
 */

/**
 * To object converter part of an {@link IWrapper}.
 * @typedef WrapperToObjectConverter
 * @type {function}
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @this Type
 */

/**
 * Common type wrapper part of {@link wrappers}.
 * @interface IWrapper
 * @property {WrapperFromObjectConverter} [fromObject] From object converter
 * @property {WrapperToObjectConverter} [toObject] To object converter
 */

// Custom wrapper for Any
wrappers[".google.protobuf.Any"] = {

    fromObject: function(object) {

        // unwrap value type if mapped
        if (object && object["@type"]) {
            var type = this.lookup(object["@type"]);
            /* istanbul ignore else */
            if (type) {
                // type_url does not accept leading "."
                var type_url = object["@type"].charAt(0) === "." ?
                    object["@type"].substr(1) : object["@type"];
                // type_url prefix is optional, but path seperator is required
                return this.create({
                    type_url: "/" + type_url,
                    value: type.encode(type.fromObject(object)).finish()
                });
            }
        }

        return this.fromObject(object);
    },

    toObject: function(message, options) {

        // decode value if requested and unmapped
        if (options && options.json && message.type_url && message.value) {
            // Only use fully qualified type name after the last '/'
            var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            /* istanbul ignore else */
            if (type)
                message = type.decode(message.value);
        }

        // wrap value if unmapped
        if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            object["@type"] = message.$type.fullName;
            return object;
        }

        return this.toObject(message, options);
    }
};

},{"./message":34}],55:[function(require,module,exports){
"use strict";
module.exports = Writer;

var util      = require("./util/minimal");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};

},{"./util/minimal":52}],56:[function(require,module,exports){
"use strict";
module.exports = BufferWriter;

// extends Writer
var Writer = require("./writer");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = require("./util/minimal");

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

},{"./util/minimal":52,"./writer":55}],"abckey":[function(require,module,exports){
(function (Buffer){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var webusb_1 = __importDefault(require("./webusb"));
var _0xabc1_1 = __importDefault(require("./0xabc1"));
var _0x53c1_1 = __importDefault(require("./0x53c1"));
var ABCKEY = (function (_super) {
    __extends(ABCKEY, _super);
    function ABCKEY(options) {
        var _this = _super.call(this) || this;
        _this.__DEVICES__ = [
            _0xabc1_1.default.device,
            _0x53c1_1.default.device
        ];
        _this.__PROTOCOL__ = _0x53c1_1.default.protocol();
        _this.__WEBUSB__ = new webusb_1.default({
            debug: options.debug,
            selectConfiguration: 1,
            claimInterface: 0
        });
        _this.loopRead();
        return _this;
    }
    ABCKEY.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.__WEBUSB__.requestDevice(this.__DEVICES__)];
                    case 1:
                        result = _a.sent();
                        if (!result)
                            return [2, false];
                        if (result.productId === 0x53c1)
                            this.__PROTOCOL__ = _0x53c1_1.default.protocol();
                        else if (result.productId === 0xabc1)
                            this.__PROTOCOL__ = _0xabc1_1.default.protocol();
                        else
                            return [2, false];
                        this.emit('add', result);
                        return [2, true];
                }
            });
        });
    };
    ABCKEY.prototype.cmd = function (type, data) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.write(type, data)];
                    case 1:
                        _a.sent();
                        Object.defineProperty(this, '__MSG__', {
                            set: function (msg) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (msg === undefined)
                                                return [2];
                                            _a = msg.type;
                                            switch (_a) {
                                                case 'PinMatrixRequest': return [3, 1];
                                                case 'ButtonRequest': return [3, 2];
                                            }
                                            return [3, 4];
                                        case 1: return [3, 5];
                                        case 2: return [4, this.write('ButtonAck')];
                                        case 3:
                                            _b.sent();
                                            return [3, 5];
                                        case 4:
                                            resolve(msg);
                                            _b.label = 5;
                                        case 5: return [2];
                                    }
                                });
                            }); }
                        });
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    ABCKEY.prototype.onMsg = function (cb) {
        var _this = this;
        var arrBuf = [];
        var arrLen = 0;
        this.on('read', function (e) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.__PROTOCOL__)
                            return [2];
                        if (!this.__PROTOCOL__.hasHead(e))
                            return [2];
                        if (this.__PROTOCOL__.hasFlag(e)) {
                            arrBuf = [];
                            arrLen = this.__PROTOCOL__.msgPages(e);
                            arrBuf.push(e);
                        }
                        else {
                            arrBuf.push(e);
                        }
                        if (arrLen === 0)
                            return [2];
                        if (arrLen > arrBuf.length)
                            return [2];
                        arrLen = 0;
                        return [4, this.__PROTOCOL__.decode(arrBuf)];
                    case 1:
                        result = _a.sent();
                        this.__MSG__ = result;
                        cb(result);
                        return [2];
                }
            });
        }); });
    };
    ABCKEY.prototype.onAdd = function (cb) {
        this.on('add', function (e) { return cb(e); });
    };
    ABCKEY.prototype.onErr = function (cb) {
        this.__WEBUSB__.onDisconnect(function (e) { return cb(e); });
    };
    ABCKEY.prototype.resetDevice = function (proto) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, entropy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cmd('GetEntropy', { size: 32 })];
                    case 1: return [4, _a.sent()];
                    case 2:
                        msg = _a.sent();
                        if (msg.type === 'Failure')
                            return [2, msg];
                        entropy = Buffer.from(msg.data.entropy, 'base64');
                        return [4, this.cmd('ResetDevice', proto)];
                    case 3:
                        msg = _a.sent();
                        if (msg.type !== 'EntropyRequest')
                            return [2, msg];
                        return [4, this.cmd('EntropyAck', { entropy: entropy })];
                    case 4: return [2, _a.sent()];
                }
            });
        });
    };
    ABCKEY.prototype.signTx = function (proto) {
        return __awaiter(this, void 0, void 0, function () {
            var inputScriptType, outputScriptType, _i, _a, item, _b, _c, item, txAck, serialized, signatures, serialized_tx, msg, _d, serialized_1, item, success;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        inputScriptType = {
                            SPENDADDRESS: 0,
                            SPENDMULTISIG: 1,
                            EXTERNAL: 2,
                            SPENDWITNESS: 3,
                            SPENDP2SHWITNESS: 4
                        };
                        outputScriptType = {
                            PAYTOADDRESS: 0,
                            PAYTOSCRIPTHASH: 1,
                            PAYTOMULTISIG: 2,
                            PAYTOOPRETURN: 3,
                            PAYTOWITNESS: 4,
                            PAYTOP2SHWITNESS: 5,
                        };
                        for (_i = 0, _a = proto.inputs; _i < _a.length; _i++) {
                            item = _a[_i];
                            item.prev_hash = Buffer.from(item.prev_hash, 'hex');
                            item.script_type = item.script_type ? inputScriptType[item.script_type] : 0;
                        }
                        for (_b = 0, _c = proto.outputs; _b < _c.length; _b++) {
                            item = _c[_b];
                            item.script_type = item.script_type ? outputScriptType[item.script_type] : 0;
                        }
                        txAck = function (msg, proto) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, inputs, outputs;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = msg.data.request_type;
                                        switch (_a) {
                                            case 'TXINPUT': return [3, 1];
                                            case 'TXOUTPUT': return [3, 3];
                                        }
                                        return [3, 5];
                                    case 1:
                                        inputs = [proto.inputs[msg.data.details.request_index]];
                                        return [4, this.cmd('TxAck', { tx: { inputs: inputs } })];
                                    case 2: return [2, _b.sent()];
                                    case 3:
                                        outputs = [proto.outputs[msg.data.details.request_index]];
                                        return [4, this.cmd('TxAck', { tx: { outputs: outputs } })];
                                    case 4: return [2, _b.sent()];
                                    case 5: return [2, { type: 'Success', data: '' }];
                                }
                            });
                        }); };
                        serialized = [];
                        signatures = [];
                        serialized_tx = '';
                        return [4, this.cmd('SignTx', {
                                coin_name: proto.coin_name,
                                inputs_count: proto.inputs.length,
                                outputs_count: proto.outputs.length,
                                version: proto.version || 1,
                                lock_time: proto.lock_time || 0
                            })];
                    case 1:
                        msg = _e.sent();
                        _e.label = 2;
                    case 2:
                        if (!1) return [3, 5];
                        if (msg.data.serialized)
                            serialized.push(msg.data.serialized);
                        if (!(msg.type === 'TxRequest')) return [3, 4];
                        return [4, txAck(msg, proto)];
                    case 3:
                        msg = _e.sent();
                        _e.label = 4;
                    case 4:
                        if (msg.type === 'Failure')
                            return [3, 5];
                        if (msg.type === 'Success')
                            return [3, 5];
                        return [3, 2];
                    case 5:
                        if (msg.type === 'Failure')
                            return [2, msg];
                        for (_d = 0, serialized_1 = serialized; _d < serialized_1.length; _d++) {
                            item = serialized_1[_d];
                            serialized_tx += Buffer.from(item.serialized_tx, 'base64').toString('hex');
                            if (!item.signature)
                                continue;
                            signatures.push(Buffer.from(item.signature, 'base64').toString('hex'));
                        }
                        success = {
                            type: 'Success',
                            data: {
                                signatures: signatures,
                                serialized_tx: serialized_tx
                            }
                        };
                        return [2, success];
                }
            });
        });
    };
    ABCKEY.prototype.write = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var outBuf, _i, outBuf_1, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.__MSG__ = undefined;
                        return [4, this.__PROTOCOL__.encode(type, data)];
                    case 1:
                        outBuf = _a.sent();
                        _i = 0, outBuf_1 = outBuf;
                        _a.label = 2;
                    case 2:
                        if (!(_i < outBuf_1.length)) return [3, 5];
                        buf = outBuf_1[_i];
                        return [4, this.__WEBUSB__.transferOut(1, buf)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [2];
                }
            });
        });
    };
    ABCKEY.prototype.loopRead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!1) return [3, 3];
                        return [4, new Promise(function (resolve) { return setTimeout(resolve, 22); })];
                    case 1:
                        _a.sent();
                        return [4, this.__WEBUSB__.transferIn(1, 64)];
                    case 2:
                        inBuf = _a.sent();
                        this.emit('read', inBuf);
                        return [3, 0];
                    case 3: return [2];
                }
            });
        });
    };
    return ABCKEY;
}(events_1.EventEmitter));
exports.default = ABCKEY;

}).call(this,require("buffer").Buffer)
},{"./0x53c1":2,"./0xabc1":4,"./webusb":8,"buffer":20,"events":21}]},{},[]);