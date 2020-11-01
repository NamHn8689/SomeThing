import 'package:flutter/material.dart';

void alertDialog(context, text) {
//    loadingDialog;
  showDialog(
    context: context,
    builder: (context) {
      return AlertDialog(
        title: const Text(
          'False',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        content: SingleChildScrollView(child: Text(text)),
        actions: <Widget>[
          FlatButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Try again'),
          ),
        ],
      );
    },
  );
}

void loadDiaglog(context) {
  showDialog(
      context: context,
      builder: (context) {
//          Future.delayed(
//              Duration(seconds: 20), () => Navigator.of(context).pop(true));
        return Dialog(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          child: Container(
            height: 200,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const CircularProgressIndicator(),
                const SizedBox(height: 25),
                const Text(
                  "Loading",
                  style: TextStyle(color: Colors.blue, fontSize: 23),
                )
              ],
            ),
          ),
        );
      });
}
