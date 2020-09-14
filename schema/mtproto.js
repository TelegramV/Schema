Object.defineProperty(exports, "__esModule", {value: true});

const MTProto = 0;

exports.default = {
    "constructors": [
        {
            "@": MTProto,
            "id": 481674261,
            "predicate": "vector",
            "params": [],
            "type": "Vector t"
        },
        {
            "@": MTProto,
            "id": 85337187,
            "predicate": "resPQ",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "pq",
                    "type": "bytes"
                },
                {
                    "name": "server_public_key_fingerprints",
                    "type": "Vector<long>"
                }
            ],
            "type": "ResPQ"
        },
        {
            "@": MTProto,
            "id": -2083955988,
            "predicate": "p_q_inner_data",
            "params": [
                {
                    "name": "pq",
                    "type": "bytes"
                },
                {
                    "name": "p",
                    "type": "bytes"
                },
                {
                    "name": "q",
                    "type": "bytes"
                },
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "new_nonce",
                    "type": "int256"
                }
            ],
            "type": "P_Q_inner_data"
        },
        {
            "@": MTProto,
            "id": 2043348061,
            "predicate": "server_DH_params_fail",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "new_nonce_hash",
                    "type": "int128"
                }
            ],
            "type": "Server_DH_Params"
        },
        {
            "@": MTProto,
            "id": -790100132,
            "predicate": "server_DH_params_ok",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "encrypted_answer",
                    "type": "bytes"
                }
            ],
            "type": "Server_DH_Params"
        },
        {
            "@": MTProto,
            "id": -1249309254,
            "predicate": "server_DH_inner_data",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "g",
                    "type": "int"
                },
                {
                    "name": "dh_prime",
                    "type": "bytes"
                },
                {
                    "name": "g_a",
                    "type": "bytes"
                },
                {
                    "name": "server_time",
                    "type": "int"
                }
            ],
            "type": "Server_DH_inner_data"
        },
        {
            "@": MTProto,
            "id": 1715713620,
            "predicate": "client_DH_inner_data",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "retry_id",
                    "type": "long"
                },
                {
                    "name": "g_b",
                    "type": "bytes"
                }
            ],
            "type": "Client_DH_Inner_Data"
        },
        {
            "@": MTProto,
            "id": 1003222836,
            "predicate": "dh_gen_ok",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "new_nonce_hash1",
                    "type": "int128"
                }
            ],
            "type": "Set_client_DH_params_answer"
        },
        {
            "@": MTProto,
            "id": 1188831161,
            "predicate": "dh_gen_retry",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "new_nonce_hash2",
                    "type": "int128"
                }
            ],
            "type": "Set_client_DH_params_answer"
        },
        {
            "@": MTProto,
            "id": -1499615742,
            "predicate": "dh_gen_fail",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "new_nonce_hash3",
                    "type": "int128"
                }
            ],
            "type": "Set_client_DH_params_answer"
        },
        {
            "@": MTProto,
            "id": -212046591,
            "predicate": "rpc_result",
            "params": [
                {
                    "name": "req_msg_id",
                    "type": "long"
                },
                {
                    "name": "result",
                    "type": "Object"
                }
            ],
            "type": "RpcResult"
        },
        {
            "@": MTProto,
            "id": 558156313,
            "predicate": "rpc_error",
            "params": [
                {
                    "name": "error_code",
                    "type": "int"
                },
                {
                    "name": "error_message",
                    "type": "string"
                }
            ],
            "type": "RpcError"
        },
        {
            "@": MTProto,
            "id": 1579864942,
            "predicate": "rpc_answer_unknown",
            "params": [],
            "type": "RpcDropAnswer"
        },
        {
            "@": MTProto,
            "id": -847714938,
            "predicate": "rpc_answer_dropped_running",
            "params": [],
            "type": "RpcDropAnswer"
        },
        {
            "@": MTProto,
            "id": -1539647305,
            "predicate": "rpc_answer_dropped",
            "params": [
                {
                    "name": "msg_id",
                    "type": "long"
                },
                {
                    "name": "seq_no",
                    "type": "int"
                },
                {
                    "name": "bytes",
                    "type": "int"
                }
            ],
            "type": "RpcDropAnswer"
        },
        {
            "@": MTProto,
            "id": 155834844,
            "predicate": "future_salt",
            "params": [
                {
                    "name": "valid_since",
                    "type": "int"
                },
                {
                    "name": "valid_until",
                    "type": "int"
                },
                {
                    "name": "salt",
                    "type": "long"
                }
            ],
            "type": "FutureSalt"
        },
        {
            "@": MTProto,
            "id": -1370486635,
            "predicate": "future_salts",
            "params": [
                {
                    "name": "req_msg_id",
                    "type": "long"
                },
                {
                    "name": "now",
                    "type": "int"
                },
                {
                    "name": "salts",
                    "type": "vector<future_salt>"
                }
            ],
            "type": "FutureSalts"
        },
        {
            "@": MTProto,
            "id": 880243653,
            "predicate": "pong",
            "params": [
                {
                    "name": "msg_id",
                    "type": "long"
                },
                {
                    "name": "ping_id",
                    "type": "long"
                }
            ],
            "type": "Pong"
        },
        {
            "@": MTProto,
            "id": -501201412,
            "predicate": "destroy_session_ok",
            "params": [
                {
                    "name": "session_id",
                    "type": "long"
                }
            ],
            "type": "DestroySessionRes"
        },
        {
            "@": MTProto,
            "id": 1658015945,
            "predicate": "destroy_session_none",
            "params": [
                {
                    "name": "session_id",
                    "type": "long"
                }
            ],
            "type": "DestroySessionRes"
        },
        {
            "@": MTProto,
            "id": -1631450872,
            "predicate": "new_session_created",
            "params": [
                {
                    "name": "first_msg_id",
                    "type": "long"
                },
                {
                    "name": "unique_id",
                    "type": "long"
                },
                {
                    "name": "server_salt",
                    "type": "long"
                }
            ],
            "type": "NewSession"
        },
        {
            "@": MTProto,
            "id": 1945237724,
            "predicate": "msg_container",
            "params": [
                {
                    "name": "messages",
                    "type": "vector<%Message>"
                }
            ],
            "type": "MessageContainer"
        },
        {
            "@": MTProto,
            "id": 1538843921,
            "predicate": "message",
            "params": [
                {
                    "name": "msg_id",
                    "type": "long"
                },
                {
                    "name": "seqno",
                    "type": "int"
                },
                {
                    "name": "bytes",
                    "type": "int"
                },
                {
                    "name": "body",
                    "type": "Object"
                }
            ],
            "type": "Message"
        },
        {
            "@": MTProto,
            "id": -530561358,
            "predicate": "msg_copy",
            "params": [
                {
                    "name": "orig_message",
                    "type": "Message"
                }
            ],
            "type": "MessageCopy"
        },
        {
            "@": MTProto,
            "id": 812830625,
            "predicate": "gzip_packed",
            "params": [
                {
                    "name": "packed_data",
                    "type": "bytes"
                }
            ],
            "type": "Object"
        },
        {
            "@": MTProto,
            "id": 1658238041,
            "predicate": "msgs_ack",
            "params": [
                {
                    "name": "msg_ids",
                    "type": "Vector<long>"
                }
            ],
            "type": "MsgsAck"
        },
        {
            "@": MTProto,
            "id": -1477445615,
            "predicate": "bad_msg_notification",
            "params": [
                {
                    "name": "bad_msg_id",
                    "type": "long"
                },
                {
                    "name": "bad_msg_seqno",
                    "type": "int"
                },
                {
                    "name": "error_code",
                    "type": "int"
                }
            ],
            "type": "BadMsgNotification"
        },
        {
            "@": MTProto,
            "id": -307542917,
            "predicate": "bad_server_salt",
            "params": [
                {
                    "name": "bad_msg_id",
                    "type": "long"
                },
                {
                    "name": "bad_msg_seqno",
                    "type": "int"
                },
                {
                    "name": "error_code",
                    "type": "int"
                },
                {
                    "name": "new_server_salt",
                    "type": "long"
                }
            ],
            "type": "BadMsgNotification"
        },
        {
            "@": MTProto,
            "id": 2105940488,
            "predicate": "msg_resend_req",
            "params": [
                {
                    "name": "msg_ids",
                    "type": "Vector<long>"
                }
            ],
            "type": "MsgResendReq"
        },
        {
            "@": MTProto,
            "id": -630588590,
            "predicate": "msgs_state_req",
            "params": [
                {
                    "name": "msg_ids",
                    "type": "Vector<long>"
                }
            ],
            "type": "MsgsStateReq"
        },
        {
            "@": MTProto,
            "id": 81704317,
            "predicate": "msgs_state_info",
            "params": [
                {
                    "name": "req_msg_id",
                    "type": "long"
                },
                {
                    "name": "info",
                    "type": "bytes"
                }
            ],
            "type": "MsgsStateInfo"
        },
        {
            "@": MTProto,
            "id": -1933520591,
            "predicate": "msgs_all_info",
            "params": [
                {
                    "name": "msg_ids",
                    "type": "Vector<long>"
                },
                {
                    "name": "info",
                    "type": "bytes"
                }
            ],
            "type": "MsgsAllInfo"
        },
        {
            "@": MTProto,
            "id": 661470918,
            "predicate": "msg_detailed_info",
            "params": [
                {
                    "name": "msg_id",
                    "type": "long"
                },
                {
                    "name": "answer_msg_id",
                    "type": "long"
                },
                {
                    "name": "bytes",
                    "type": "int"
                },
                {
                    "name": "status",
                    "type": "int"
                }
            ],
            "type": "MsgDetailedInfo"
        },
        {
            "@": MTProto,
            "id": -2137147681,
            "predicate": "msg_new_detailed_info",
            "params": [
                {
                    "name": "answer_msg_id",
                    "type": "long"
                },
                {
                    "name": "bytes",
                    "type": "int"
                },
                {
                    "name": "status",
                    "type": "int"
                }
            ],
            "type": "MsgDetailedInfo"
        }
    ],
    "methods": [
        {
            "@": MTProto,
            "id": 1615239032,
            "method": "req_pq",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                }
            ],
            "type": "ResPQ"
        },
        {
            "@": MTProto,
            "id": -686627650,
            "method": "req_DH_params",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "p",
                    "type": "bytes"
                },
                {
                    "name": "q",
                    "type": "bytes"
                },
                {
                    "name": "public_key_fingerprint",
                    "type": "long"
                },
                {
                    "name": "encrypted_data",
                    "type": "bytes"
                }
            ],
            "type": "Server_DH_Params"
        },
        {
            "@": MTProto,
            "id": -184262881,
            "method": "set_client_DH_params",
            "params": [
                {
                    "name": "nonce",
                    "type": "int128"
                },
                {
                    "name": "server_nonce",
                    "type": "int128"
                },
                {
                    "name": "encrypted_data",
                    "type": "bytes"
                }
            ],
            "type": "Set_client_DH_params_answer"
        },
        {
            "@": MTProto,
            "id": 1491380032,
            "method": "rpc_drop_answer",
            "params": [
                {
                    "name": "req_msg_id",
                    "type": "long"
                }
            ],
            "type": "RpcDropAnswer"
        },
        {
            "@": MTProto,
            "id": -1188971260,
            "method": "get_future_salts",
            "params": [
                {
                    "name": "num",
                    "type": "int"
                }
            ],
            "type": "FutureSalts"
        },
        {
            "@": MTProto,
            "id": 2059302892,
            "method": "ping",
            "params": [
                {
                    "name": "ping_id",
                    "type": "long"
                }
            ],
            "type": "Pong"
        },
        {
            "@": MTProto,
            "id": -213746804,
            "method": "ping_delay_disconnect",
            "params": [
                {
                    "name": "ping_id",
                    "type": "long"
                },
                {
                    "name": "disconnect_delay",
                    "type": "int"
                }
            ],
            "type": "Pong"
        },
        {
            "@": MTProto,
            "id": -414113498,
            "method": "destroy_session",
            "params": [
                {
                    "name": "session_id",
                    "type": "long"
                }
            ],
            "type": "DestroySessionRes"
        },
        {
            "@": MTProto,
            "id": -1835453025,
            "method": "http_wait",
            "params": [
                {
                    "name": "max_delay",
                    "type": "int"
                },
                {
                    "name": "wait_after",
                    "type": "int"
                },
                {
                    "name": "max_wait",
                    "type": "int"
                }
            ],
            "type": "HttpWait"
        },
    ]
};